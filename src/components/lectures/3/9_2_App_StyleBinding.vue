<template>
	<div :style="styleObject">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa dolor
		sit eum. Quod cumque reprehenderit vitae labore ex accusantium, doloremque
		odio, delectus, excepturi veritatis error pariatur cupiditate corrupti
		explicabo.
	</div>
	<button v-on:click="fontSize--">font --</button>
	<button v-on:click="fontSize++">font ++</button>
</template>

<script>
import { ref, computed } from 'vue';

export default {
	setup() {
		// const styleObject = reactive({
		// 	color: 'red',
		// 	fontSize: '13px',
		// });

		// computed 사용하기
		const fontSize = ref(13);
		const styleObject = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});
		return { styleObject, fontSize };
	},
};
</script>

<style lang="scss" scoped></style>
