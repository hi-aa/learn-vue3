<template>
	<div>
		<h2>보간법</h2>
		<p>{{ message }}</p>
		<p v-once>{{ message }}</p>
		<button @click="appendMessage">append message</button>

		<hr />
		<h2>보간법</h2>
		<p>{{ rawHtml }}</p>
		<p v-html="rawHtml"></p>

		<hr />
		<h2>속성 바인딩</h2>
		<div title="hi">마우스를 올리세요</div>
		<div v-bind:title="dynamicTitle">마우스를 올리세요</div>
		<input id="booleanVariable" value="dddd@" :disabled="isDisabled" />
		<input v-bind="attrs" />

		<hr />
		<h2>Javascript</h2>
		{{ message.split('').reverse().join('') }}
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('안녕하세요');
		const appendMessage = () => {
			message.value += '!';
		};

		const rawHtml = ref('<strong>안녕</strong>');

		const dynamicTitle = ref('dynamic Hi!');
		const isDisabled = ref(true);
		const attrs = ref({
			type: 'text',
			value: 'attr obj!',
			disabled: true,
		});
		return {
			message,
			appendMessage,
			rawHtml,
			dynamicTitle,
			isDisabled,
			attrs,
		};
	},
};
</script>

<style lang="scss" scoped></style>
