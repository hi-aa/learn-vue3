<template>
	<main>
		<div class="container py-4">
			<div class="row g-3">
				<!-- <div class="col col-4">
					<AppCard title="제목1" content="내용1"></AppCard>
				</div>
				<div class="col col-4">
					<AppCard></AppCard>
				</div> -->
				<div class="col col-4" v-for="(post, index) in posts" :key="index">
					<AppCard
						:title="post.title"
						:content="post.content"
						:type="post.type"
						:is-like="post.isLike"
						@toggle-like="post.isLike = !post.isLike"
					></AppCard>
					<!-- :isLike="post.isLike"
                    둘다 가능한데 공식문서는 케밥케이스 권유 -->
				</div>

				<div class="col col-4">
					<!-- disabled로 넣어두는게 :disabled="true"와 동일함 -->
					<AppCard title="제목1" content="내용1" disabled></AppCard>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import { reactive } from 'vue';
import AppCard from './AppCard.vue';

export default {
	components: {
		AppCard,
	},
	setup() {
		const posts = reactive([
			{ title: '제목1', content: '내용1', type: 'news', isLike: true },
			{ title: '제목2', content: '내용2', type: 'notice', isLike: false },
			{ title: '제목3', content: '내용3', type: 'news', isLike: true },
			{ title: '제목4', content: '내용4', type: 'news', isLike: true },
			{ title: '제목5', content: '내용5', type: 'news', isLike: true },
		]);
		return { posts };
	},
};
</script>

<style lang="scss" scoped></style>
