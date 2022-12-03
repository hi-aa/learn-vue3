<template>
	<main>
		<div class="container py-4">
			<!-- emit 호출한거 컴포넌트에 표시해주기 -->
			<!-- <PostCreate @create-post="createPost"></PostCreate> -->
			<PostCreate @create-post="createPost"></PostCreate>

			<hr class="my-4" />

			<div class="row g-3">
				<div class="col col-4" v-for="(post, index) in posts" :key="index">
					<AppCard
						:title="post.title"
						:content="post.content"
						:type="post.type"
						:is-like="post.isLike"
						@toggle-like="post.isLike = !post.isLike"
					></AppCard>
				</div>
			</div>

			<hr class="my-4" />
			<!-- none props 속성: LableInput에서 선언한 porps 속성은 modelValue와 label뿐이지만
            루트 엘리먼트에 props가 아닌 다른 속성 값도 설정됨 -->
			<!-- other-attr="test"
            class="none-class"
            id="test" -->

			<!-- 동일한 속성이 부모요소와 자식 요소에 둘 다 선언되어 있으면,
            class와 style 속성은 병합
            나머지 속성은 부모에서 설정한 값으로 덮어씌워짐 -->
			<!-- v-on 이벤트 리스너도 상속됨 -->
			<LabelInput
				v-model="userName"
				label="이름"
				class="parent-class"
				style="color: red"
				id="parent-id"
			></LabelInput>
		</div>
	</main>
</template>

<script>
import { reactive, ref } from 'vue';
import AppCard from './AppCard.vue';
import PostCreate from './PostCreate.vue';
import LabelInput from './LabelInput.vue';

export default {
	components: {
		AppCard,
		PostCreate,
		LabelInput,
	},
	setup() {
		const posts = reactive([
			{ title: '제목1', content: '내용1', type: 'news', isLike: true },
			{ title: '제목2', content: '내용2', type: 'notice', isLike: false },
			{ title: '제목3', content: '내용3', type: 'news', isLike: true },
			{ title: '제목4', content: '내용4', type: 'news', isLike: true },
			{ title: '제목5', content: '내용5', type: 'news', isLike: true },
		]);

		// const createPost = (a, b, c, d) => {
		// 	console.log('createPost >> ', a, b, c, d);
		// };
		const createPost = post => {
			console.log(post);
			posts.push(post);
		};

		const userName = ref('');
		const firstname = ref('');
		const lastname = ref('');

		return { posts, createPost, userName, firstname, lastname };
	},
};
</script>

<style lang="scss" scoped></style>
