<template>
	<div>{{ message }}</div>
	<button @click="addMessage">add messate</button>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		// ref는 primitive 타입의 값을 반응형으로 사용할 때 사용
		// primitive를 reactive를 사용할 수 없음
		// reactive는 객체나 배열 같은 타입에만 동작함
		let message = ref('Hello');
		const addMessage = () => {
			message.value = message.value + '!';
		};
		console.log('message>> ', message);
		console.log('message.value>> ', message.value);
		console.log('typeof message.value>> ', typeof message.value);

		return {
			message,
			addMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
