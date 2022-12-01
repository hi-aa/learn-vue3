<template>
	<div>
		<!-- 디렉티브(directive) 란? v 접두사가 있는 특수속성
		컴포넌트(DOM 요소)에게 ~~하게 작동하라 하고 지시를 해주는 지시문
		Vue에서 여러가지 디렉티브를 제공한다. -->

		<!-- 1. v-text -->
		<div>{{ msg }}</div>
		<div v-text="msg"></div>
		<div v-html="msg"></div>

		<hr />
		<!-- 2. v-cloak -->
		index_cloak.html 참고

		<hr />
		<!-- 3. v-once -->
		<!-- 한번만 랜더링 하기 때문에 업데이트 성능을 최적화 하는데 사용할 수 있음 -->
		<div v-once>{{ msg }}</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const msg = ref('<strong>messag!</strong>');
		return { msg };
	},
};
</script>

<style lang="scss" scoped></style>
