<template>
	<div class="card">
		<div class="card-body">
			<span class="badge bg-secondary">
				<!-- {{type === 'news' ? '뉴스' : '공지사항'}} -->
				{{ typeName }}
			</span>
			<h5 class="card-title mt-2">{{ title }}</h5>
			<p class="card-text">
				{{ content }}
			</p>

			<!-- <a v-if="isLike" href="#" class="btn btn-danger">좋아요</a> -->
			<a href="#" class="btn" :class="isLikeClass" @click="toggleLike"
				>좋아요</a
			>
		</div>

		<!-- props에 접근 가능
		{{ $props }} -->
	</div>
</template>

<script>
console.log('normal script');
</script>

<script setup>
import { computed } from 'vue';

console.log('setup script');

// setup script에서 props와 emit 정의: defineProps, defineEmits
const props = defineProps({
	type: {
		type: String,
		default: 'news',
		validator: value => {
			// 유효성 검사
			return ['news', 'notice'].includes(value); // false가 나오면 콘솔에 경고가 뜸
		},
	},
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		// required: true,
	},
	isLike: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits(['toggleLike']);

const isLikeClass = computed(() =>
	props.isLike ? 'btn-danger' : 'btn-outline-danger',
);
const typeName = computed(() => (props.type === 'news' ? '뉴스' : '공지사항'));

const toggleLike = () => {
	emit('toggleLike'); // 상위속성에서 toggleLike라는 이벤트를 실행시킴
	// console.log(props.isLike);

	// 자바스크립트 특성 상 자식 엘리먼트에서도 객체나 배열의 속성을 변경 가능하긴 함
	// 그래도 그렇게 수정하지 말고 context.emit으로 부모요소에서 업데이트 하도록 할 것
};
</script>
