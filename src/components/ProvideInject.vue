<template>
	<div class="card">
		<div class="card-header">Provide Inject</div>
		<div class="card-body">
			<button @click="count++">count+</button>
			<p>appMessage: {{ appMessage }}</p>
			<Child></Child>
		</div>
	</div>
</template>

<script>
import { inject, provide, readonly, ref } from 'vue';
import Child from './Child.vue';

export default {
	components: {
		Child,
	},
	setup() {
		const staticMessage = 'static Message';
		const message = ref('message');
		const count = ref(10);

		const updateMessage = () => {
			message.value = message.value + '!';
		};

		// provide로 넘기면 필요한 자식 컴포넌트에서 inject로 불러서 쓸 수 있음
		// 데이터에 대한 변경이 필요하면 메서드도 부모가 전달해주기
		provide('static-message', staticMessage);

		provide('message', { message: readonly(message), updateMessage }); // message를 readonly로 전달
		provide('count', count);

		// app에서 가져온 provide data
		const appMessage = inject('app-message');

		return { count, appMessage };
	},
};
</script>

<style lang="scss" scoped></style>
