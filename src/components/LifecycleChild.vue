<template>
	<div class="card">
		<div class="card-body">
			Lifecycle Child
			<input type="text" id="input" />
		</div>
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';

export default {
	setup() {
		// console.log('[child] setup');
		// onBeforeMount(() => {
		// 	console.log('[child] onBeforeMount');
		// });
		// onMounted(() => {
		// 	console.log('[child] onMount');
		// });

		// parent가 setup부터 onBeforeMount까지 먼저 실행되고
		// 그 이후 child의 setup부터 onMount가 완료됨
		// 그리고 마저 부모의 onMount가 실행

		// 4. 해제(소멸)
		onBeforeUnmount(() => {
			console.log('onBeforeUnmount');
			console.log(document.querySelector('#input'));
		});
		onUnmounted(() => {
			console.log('onUnmounted');
			console.log(document.querySelector('#input')); // undefined
		});
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
