<template>
	<div>
		<button @click="printEventInfo('hello vue3', $event)">
			Inline Event Handler
		</button>
		<hr />
		<input type="text" @keyup="onKeyupHandler" />
	</div>
</template>

<script>
export default {
	setup() {
		const printEventInfo = (message, event) => {
			console.log(message);
			console.log(event.target);
			console.log(event.target.tagName);
		};
		const onKeyupHandler = event => {
			console.log(event.key);
		};

		return { printEventInfo, onKeyupHandler };
	},
};
</script>

<style lang="scss" scoped></style>
