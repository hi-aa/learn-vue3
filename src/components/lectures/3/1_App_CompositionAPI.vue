<template>
	<h2>Reactive Message</h2>
	<p>{{ reactiveMessage }}</p>
	<button v-on:click="addReactiveMessage">Add Reactive</button>

	<h2>Normal Message</h2>
	<p>{{ normalMessage }}</p>
	<button v-on:click="addNormalMessage">Add Normal</button>
</template>

<script>
import { ref, isRef, onBeforeMount, onMounted } from 'vue';

export default {
	setup() {
		console.log('setup');
		const reactiveMessage = ref('reactive message');
		const addReactiveMessage = () => {
			reactiveMessage.value = reactiveMessage.value + '!';
		};
		console.log('reactiveMessage isRef>> ', isRef(reactiveMessage));
		let normalMessage = 'normal message';
		const addNormalMessage = () => {
			normalMessage += '!';
			// console.log(normalMessage)
		};
		console.log('normalMessage isRef>> ', isRef(normalMessage));

		onBeforeMount(() => {
			console.log('onBeforeMount');
		});

		onMounted(() => {
			console.log('onMounted');
		});

		return {
			reactiveMessage,
			normalMessage,
			addReactiveMessage,
			addNormalMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
