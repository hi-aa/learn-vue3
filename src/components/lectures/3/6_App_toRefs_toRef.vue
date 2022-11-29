<template>
	<div>
		{{ author }} <br />
		{{ title }}
	</div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';
export default {
	setup() {
		const book = reactive({
			author: 'Vue Team',
			year: '2020',
			title: 'Vue 3 Guide',
			description: '당신은 이 책을 지금 바로 읽습니다 ;)',
			price: '무료',
		});
		// const { author, title } = book; // 구조분해
		// console.log(typeof author); // string // Reactive 반응형 속성을 잃게 됨

		// 반응형을 유지하면서 값을 가져오기
		// Composition API 유틸이 있음
		const { author, title } = toRefs(book); // 여러개 가져오기
		const year = toRef(book, 'year'); // 한개

		return {
			author,
			title,
			year,
			// book,
		};
	},
};
</script>

<style lang="scss" scoped></style>
