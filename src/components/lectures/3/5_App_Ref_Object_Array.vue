<template>
	<div></div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
	setup() {
		// ref -> object
		const count = ref(0);
		const state = reactive({
			count,
		});
		count.value++;
		console.log(count.value); // ref는 value 속성을 자동으로 부여함
		console.log(state.count); // 객체에 넣은건 value 없이 바로 참조값 확인 가능

		// ref -> Array
		const message = ref('Hello');
		const arr = reactive([message]);
		console.log(arr[0].value); // 배열에 넣은건 value가 있어야 함 // 일단 걍 외우기

		return {};
	},
};
</script>

<style lang="scss" scoped></style>
