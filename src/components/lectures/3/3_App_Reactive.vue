<template>
	<!-- <button v-on:click="state.count++">state{{ state.count }}</button> -->
	<button v-on:click="increment">state{{ state.count }}</button>
	<button v-on:click="state.deep.count++">
		Deep State{{ state.deep.count }}
	</button>
</template>

<script>
import { reactive } from 'vue';

export default {
	setup() {
		// reactive는 객체 타입을 반응형으로 만들 때 사용
		const state = reactive({
			count: 0,
			deep: {
				count: 1,
			},
		});
		const increment = () => {
			state.count++;
		};

		return {
			state,
			increment,
		};
	},
};
</script>

<style lang="scss" scoped></style>
