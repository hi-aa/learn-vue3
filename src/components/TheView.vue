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
			<!-- <LabelInput
				:model-value="userName"
				@update:model-value="value => (userName = value)"
			></LabelInput> -->
			<LabelInput v-model="userName" label="이름"></LabelInput>

			<!-- props의 modelValue를 다른 이름으로 받을 수 있음 -->
			<LabelTitle v-model:title="userName" label="제목"></LabelTitle>

			<hr />
			<!-- v-model은 양방향 바인딩이니 변수 연결해주고 여기서 업데이트 더 신경쓸건 없음 -->
			<!-- 전달인자의 이름을 설정해서 여러개의 값을 보낼 수 있음 -->
			<Username
				v-model:firstname="firstname"
				v-model:lastname="lastname"
			></Username>
		</div>
	</main>
</template>

<script>
import { reactive, ref } from 'vue';
import AppCard from './AppCard.vue';
import PostCreate from './PostCreate.vue';
import LabelInput from './LabelInput.vue';
import LabelTitle from './LabelTitle.vue';
import Username from './Username.vue';

export default {
	components: {
		AppCard,
		PostCreate,
		LabelInput,
		LabelTitle,
		Username,
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
