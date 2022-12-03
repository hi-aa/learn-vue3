<template>
	<!-- LabelInput에서 modelValue로 값을 받아서 설정하고
    업데이트 시 update:ModelValue를 호출함 -->
	<LabelInput
		label="성"
		:model-value="firstname"
		@update:model-value="value => $emit('update:firstname', value)"
	></LabelInput>
	<LabelInput
		label="이름"
		:model-value="lastname"
		@update:model-value="value => $emit('update:lastname', value)"
	></LabelInput>
</template>

<script>
import LabelInput from './LabelInput.vue';
export default {
	components: { LabelInput },
	// props나 emit으로 변수명 세팅하고 이벤트 설정 잘 해주기
	props: ['firstname', 'lastname'],
	emits: ['update:firstname', 'update:lastname'],
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
