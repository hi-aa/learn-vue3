<template>
	<div class="container py-4">
		<button
			class="btn btn-primary me-2"
			@click="changeCurrentComp(DynamicApple)"
		>
			사과
		</button>
		<button class="btn btn-danger" @click="changeCurrentComp(DynamicBanana)">
			바나나
		</button>
		<hr />
		<component :is="currentComp" />
		{{ obj1 }}
		{{ obj2 }}
	</div>
</template>

<script setup>
import { ref, shallowRef } from 'vue';
import DynamicApple from './DynamicApple.vue';
import DynamicBanana from './DynamicBanana.vue';

// const currentComp = ref(DynamicApple);
const currentComp = shallowRef(DynamicApple); // is 속성 사용할 때는 ref보다 shallowRef가 성능 유리함
const changeCurrentComp = comp => (currentComp.value = comp);
// shallowRef 차이점
const obj1 = ref({ name: '홍길동' });
const obj2 = shallowRef({ name: '김길동' });
// 둘다 반응형 객체인데
// obj2.value가 변경되었을때 반응함
// obj2.value.name이 변경되었을 때 반응하지 않음 => 속성이 변경되는 것에 반응하지 않음 // shallow!
</script>

<style lang="scss" scoped></style>
