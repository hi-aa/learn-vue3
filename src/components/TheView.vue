<template>
	<div class="container py-4">
		<!-- Prop Drilling: 일반적으로 부모에서 자식으로 데이터를 전달할때 props를 사용하는데
    컴포넌트가 깊어지면 해당 자손 컴포넌트와 연관된 모든 자식 컴포넌트가 영향을 받게 됨 -->
		<!-- vue3에서 provide, inject로 데이터를 제공하여 종속성을 주입받을 수 있음 -->

		현재 파일구조: ProvideInject => Child => DeepChild
		<ProvideInject></ProvideInject>
	</div>
</template>

<script>
import ProvideInject from './ProvideInject.vue';

export default {
	components: {
		ProvideInject,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
