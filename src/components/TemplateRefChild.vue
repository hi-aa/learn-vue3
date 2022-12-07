<template>
	<!-- 부모 컴포넌트쪽 접근 가능 -->
	<div>{{ $parent }}</div>
	<ul>
		<li v-for="fruit in $parent.fruits" :key="fruit">{{ fruit }}</li>
	</ul>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('hello');
		const sayHello = () => {
			alert(message.value);
		};
		return { message, sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
