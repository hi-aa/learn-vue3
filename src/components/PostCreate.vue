<template>
	<div class="row g-3">
		<div class="col col-2">
			<select class="form-select" aria-label="Default select example">
				<option value="news">뉴스</option>
				<option value="notice">공지사항</option>
			</select>
		</div>
		<div class="col col-8">
			<input type="text" class="form-control" v-model="title" />
		</div>
		<div class="col col-2 d-grid">
			<!-- <button
                class="btn btn-primary"
                @click="$emit('createPost', 1, 2, 3, '김길동')"
            >
                Button
            </button> -->
			<!-- <button class="btn btn-primary" @click="createPost2">Button2</button> -->
			<button class="btn btn-primary" @click="createPost">추가</button>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	// 이벤트 선언
	// 이벤트 선언은 선택사항이지만 컴포넌트를 더 잘 문서화 하기 위해 선언하는 것을 권유함
	emits: {
		// createPost: null, // 유효성 체크 없는 경우 null로 선언
		createPost: newPost => {
			// false면 콘솔에 경고표시 뜨고, 실행은 됨
			if (!newPost.title || !newPost.type) return false;
			return true; // 유효성 체크
		},
	},
	setup(props, { emit }) {
		// 또 다른 emit 쓰는 방법
		// const createPost2 = () => emit('createPost', 22, 3, 4, '테스트');

		const type = ref('news');
		const title = ref('');

		const createPost = () => {
			const newPost = {
				type: type.value,
				title: title.value,
			};
			emit('createPost', newPost);
			type.value = 'news';
			title.value = '';
		};

		return { type, title, createPost };
	},
};
</script>

<style lang="scss" scoped></style>
