<template>
	<div>
		<!-- ctrl + enter 조합 -->
		<input type="text" @keyup.ctrl.enter="addTodo" />
		<ul>
			<li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
		</ul>
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	setup() {
		const todos = reactive([]);
		const addTodo = event => {
			// if (event.key == 'Enter') { // => 이걸 이벤트 핸들러 .enter로 할 수 있음
			console.log(event.target.value);
			todos.push(event.target.value);
			event.target.value = '';
			event.target.focus();
			// }
		};
		return { todos, addTodo };
	},
};
</script>

<style lang="scss" scoped></style>
