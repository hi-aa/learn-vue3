<template>
	<div>
		<!-- v-memo는 반응형 데이터를 v-once처럼 한번만 랜더링하는 성격?을 이용하기 위해 사용할 수 있음
		v-memo의 배열 안에 반응형 값을 넣으면 해당 값이 업데이트 될 때만 요소를 랜더링함 -->
		<div v-memo="[views]">
			<p>Subscribers : {{ subscribers }}</p>
			<p>Views : {{ views }}</p>
			<p>Likes :{{ likes }}</p>
		</div>
		<button v-on:click="subscribers++">Sub++</button>
		<button @click="views++">View++</button>
		<button v-on:click="likes++">Like++</button>

		<div>
			<p>Subscribers : {{ subscribers }}</p>
			<p>Views : {{ views }}</p>
			<p>Likes :{{ likes }}</p>
		</div>

		<hr />
		<!-- 디렉티브 구성
		[v-접두사로 시작하는 디렉티브]:[전달인자].[수식어] = "[value]"
		v-on:submit.prevent="onsubmitevent" -->
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const subscribers = ref(4000);
		const views = ref(300);
		const likes = ref(20);
		return { subscribers, views, likes };
	},
};
</script>

<style lang="scss" scoped></style>
