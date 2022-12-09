<template>
	<div class="container py-4">
		<!-- <TemplateRef></TemplateRef> -->
		<Suspense>
			<ScriptSetup></ScriptSetup>
			<template #fallback>로딩중...</template>
		</Suspense>

		<!-- <DynamicComponent></DynamicComponent> -->
	</div>
</template>

<script setup>
import ScriptSetup from './ScriptSetup.vue';
// import DynamicComponent from './DynamicComponent.vue';
</script>

<style lang="scss" scoped></style>
