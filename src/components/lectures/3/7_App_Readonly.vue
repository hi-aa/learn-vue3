<template>
	<div></div>
</template>

<script>
import { reactive, readonly } from 'vue';

export default {
	setup() {
		const original = reactive({
			count: 0,
		});
		// readonly로 객체의 변경 방지
		const copy = readonly(original); // 값을 변경할 수 없음

		original.count++;
		console.log('original>> ', original.count);
		console.log('copy>> ', copy.count);
		copy.count++; // 콘솔에 경고 표시 뜸

		return {};
	},
};
</script>

<style lang="scss" scoped></style>
