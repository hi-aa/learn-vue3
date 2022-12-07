<template>
	<!-- script setup 속성으로 인해 $parents에 접근X -->
	<div>{{ $parent }}</div>
	<ul>
		<li v-for="fruit in $parent.fruits" :key="fruit">{{ fruit }}</li>
	</ul>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('hello');
const sayHello = () => {
	alert(message.value);
};

defineExpose({
	// script setup의 변수를 노출
	message,
	sayHello,
});
</script>

<style lang="scss" scoped></style>
