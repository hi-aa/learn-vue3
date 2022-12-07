<template>
	<button class="btn btn-primary" type="button" v-bind="$attrs">
		Button {{ message }}
	</button>
</template>

<script>
export default {
	inheritAttrs: false, // non-prop 속성의 상속을 막음
};
</script>
<script setup>
import { ref } from 'vue';

const message = ref('message');
</script>

<style lang="scss" scoped></style>
