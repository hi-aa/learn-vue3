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
import { computed } from 'vue';

export default {
	// props: ['title', 'content'], //외부로부터 받아올 데이터
	// props의 선언은 배열도 되고 객체도 됨
	// 공식 가이드는 객체로 상세하게 설정하는것을 권유함..
	props: {
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
			required: true,
		},
		isLike: {
			type: Boolean,
			default: false,
		},

		// Object 타입의 props는 default 선언 시 함수로
		obj: {
			type: Object,
			default: () => {
				return {};
			},
		},
	},
	// props는 단방향 데이터 흐름
	// 상위속성에서 변경하면 하위속성에 업데이트 됨
	// 반대는 X

	// 하위 속성에서 값을 변경하고 싶다면 상위속성으로 이벤트를 호춠시켜서
	// 상위속성에서 값을 변경할 수 있도록
	// emits을 이용해 구현할 수 있음
	emits: ['toggleLike'],
	setup(props, context) {
		// setup의 매개변수로 props를 받을 수 있음 // 첫번째 매개변수
		// context가 두번째 매개변수
		// console.log(props.title);

		const isLikeClass = computed(() =>
			props.isLike ? 'btn-danger' : 'btn-outline-danger',
		);
		const typeName = computed(() =>
			props.type === 'news' ? '뉴스' : '공지사항',
		);

		const toggleLike = () => {
			context.emit('toggleLike'); // 상위속성에서 toggleLike라는 이벤트를 실행시킴
			// console.log(props.isLike);

			// 자바스크립트 특성 상 자식 엘리먼트에서도 객체나 배열의 속성을 변경 가능하긴 함
			// 그래도 그렇게 수정하지 말고 context.emit으로 부모요소에서 업데이트 하도록 할 것
		};
		return { isLikeClass, typeName, toggleLike };
	},
};
</script>
