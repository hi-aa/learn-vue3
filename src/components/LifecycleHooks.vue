<template>
	<div class="container py-4">
		<input ref="inputRef" type="text" value="hello" />
		<!-- <LifecycleChild></LifecycleChild> -->
		<p>{{ message }}</p>
		<hr />
		<button @click="visible = !visible">Toggle</button>
		<LifecycleChild v-if="visible"></LifecycleChild>
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import LifecycleChild from './LifecycleChild.vue';

export default {
	components: {
		LifecycleChild,
	},
	setup() {
		console.log('setup');

		// 2. mount
		const inputRef = ref(null);
		// onBeforeMount(() => {
		// 	console.log('onbeforeMount');
		// });
		// onMounted(() => {
		// 	console.log('onMount 부터 DOM에 접근 가능:', inputRef.value);
		// });

		// 3. update
		// message 값을 변경하면 onBeforeUpdate도 message의 값은 이미 업데이트 되었음
		// DOM은 onUpdate에서 변경된 값을 확인 가능
		const message = ref('');
		// onBeforeUpdate(() => {
		// 	console.log('onBeforeUpdate:', message.value);
		// });
		// onUpdated(() => {
		// 	console.log('onUpdated:', message.value);
		// });

		// 4. 해제(소멸)
		const visible = ref(false);

		return { inputRef, message, visible };
	},
	// 1. 생성
	// beforeCreate() {
	// 	console.log('beforeCreated');
	// },
	// created() {
	// 	console.log('created');
	// },
};
</script>

<style lang="scss" scoped></style>
