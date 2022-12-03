<template>
	<label
		class="child-class"
		style="border: 1px solid navajowhite"
		id="child-id"
	>
		{{ label }} :
		<input type="text" v-model="value" />
		<!-- :value="modelValue"
			@input="event => $emit('update:modelValue', event.target.value)" -->
	</label>
</template>

<script>
import { computed } from 'vue';

export default {
	// v-model 값을 props로 받을때는 modelValue
	// emit 호출할 때는 update:modelValue 로 바로 설정할 수 있음
	props: ['modelValue', 'label'],
	emits: ['update:modelValue'],
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.modelValue;
			},
			set(value) {
				emit('update:modelValue', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
