<template>
	<label>
		{{ label }} :
		<input type="text" v-model="value" />
		<!-- :value="modelValue"
			@input="event => $emit('update:modelValue', event.target.value)" -->
	</label>
</template>

<script>
import { computed } from 'vue';

export default {
	// modelValue를 title로 받도록 설정했음
	// emit도 마찬가지로 수정
	props: ['title', 'label'],
	emits: ['update:title'],
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.title;
			},
			set(value) {
				emit('update:title', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
