<template>
	<div>
		<!-- v-if에 맞지 않으면 랜더링 되지 않음 -->
		<h2 v-if="visible">hello vue3</h2>
		<h2 v-else>False</h2>
		<button @click="visible = !visible">Toggle</button>

		<hr />
		<h2 v-if="type === 'A'">A입니다</h2>
		<h2 v-else-if="type === 'B'">B입니다</h2>
		<h2 v-else-if="type === 'C'">C입니다</h2>
		<h2 v-else>D입니다</h2>
		<button @click="type = 'A'">A</button>
		<button @click="type = 'B'">B</button>
		<button @click="type = 'C'">C</button>
		<button @click="type = 'D'">D</button>

		<hr />
		<template v-if="visible">
			<div>여러개의 엘리먼트를 묶었습니다.</div>
			<p>visible로 표시!</p>
			<input />
		</template>

		<hr />
		<!-- v-show는 display: none;으로 생성됨 -->
		<h1 v-show="ok">Title 입니다</h1>
		<button @click="ok = !ok">ok toggle</button>

		<!-- if는 전환 시 블록 내부 컴포넌트를 제거하고 다시 생성합니다(비용이 든다)
		하지만 참이 아니면 아무것도 하지 않는다(lazy)
		반면 show는 항상 랜더링을 한다.
		if는 전환비용이 높은 반면 show는 초기 랜더링 비용이 높다.
		조건이 자주 변경된다면 show, 자주 변경되지 않는다면 if를 쓰는게 낫다 -->
		<hr />
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const visible = ref(false);
		const type = ref('A');
		const ok = ref(true);
		return { visible, type, ok };
	},
};
</script>

<style lang="scss" scoped></style>
