<template>
	<div>
		<div>{{ message }}</div>
		<div>{{ reverseMessageFnc }}</div>
	</div>
</template>

<script>
import { computed } from 'vue';
import { ref, watch } from 'vue';

export default {
	setup() {
		const message = ref('hello vue3');
		const reverseMessage = ref('');
		// watch(
		// 	message,
		// 	newValue => {
		// 		reverseMessage.value = message.value.split('').reverse().join('');
		// 	},
		// 	{
		// 		immediate: true, // 즉시 실행
		// 	},
		// );

		// 아예 함수를 따로 선언해서 써도 됨
		const reverseMessageFnc = value => {
			reverseMessage.value = value.split('').reverse().join('');
		};
		watch(message, reverseMessageFnc);

		// computed와 watch가 유사함
		// computed: vue의 인스턴스 상태(ref, reactive 변수)의 종속관계를 자동으로 세팅하고자 할 때 사용
		// watch: vue의 인스턴스 상태의 변경 시점에 특정 액션을 취하고자 할 때 사용
		// => 종속된 값을 변경하는거면 computed, 비지니스 로직을 시행하려면 watch

		return { message, reverseMessage, reverseMessageFnc };
	},
};
</script>

<style lang="scss" scoped></style>
