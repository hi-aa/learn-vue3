<template>
	<!-- v-bind:[속성명] -> :[속성명] // 간략하게 쓸 수 있음 -->
	<div class="text" :class="classObject">객체를 바인딩 할 수 있음</div>
	<!-- 클래스는 일반속성과 v-bind:class 디렉티브는 함께 사용 가능 -->
	<button v-on:click="toggle">Toggle</button>

	<div class="text" :class="classObject2">Computed Class Object</div>
	<div class="text" :class="[isActive ? 'true' : 'false', 'etc1', 'etc2']">
		배열 형태도 가능
	</div>
</template>

<script>
import { computed } from 'vue';
import { reactive, ref } from 'vue';

export default {
	setup() {
		const isActive = ref(true); // 값을 반응형으로 만들어야 변경된 값을 확인할 수 있음
		const toggle = () => {
			isActive.value = !isActive.value;
		};

		const classObject = reactive({ active: isActive }); // 선언해서 사용하는것도 마찬가지 // reactive(반응형)으로 만드는것 잊지 말기
		const classObject2 = computed(() => {
			return { active: true && true };
		});

		return { isActive, toggle, classObject, classObject2 };
	},
};
</script>

<style scoped>
.text {
	font-weight: 700;
}
.active {
	color: red;
}
</style>
