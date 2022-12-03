<template>
	<div>
		<!-- prevent로 submit 기능 막음 -->
		<form @submit.prevent="save(title, content)">
			<input type="name" v-model.lazy="title" placeholder="title" />
			<textarea v-model.lazy="content" placeholder="content"></textarea>
			<hr />
			<button>저장</button>
		</form>
		<!-- lazy를 쓰면 change로 동작함=> watch 실행됨 -->
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
	setup() {
		const title = ref('');
		const content = ref('');

		const save = (title, content) => {
			console.log('저장 로직 수행');
			console.log(title);
			console.log(content);
		};

		// watchEffect는 콜백함수 내부의 반응형 데이터가 변경되면 호출함
		// watch와 다르게 watchEffect는 최초1회 실행
		// watch가 어떤 데이터를 감시할지 명시적으로 표시하고
		// watchEffect는 덜 명시적임. 적당히 상황에 맞게 사용
		watchEffect(() => {
			// console.log(title.value);
			// console.log(content.value);
			save(title.value, content.value);
		});
		return { title, content, save };
	},
};
</script>

<style lang="scss" scoped></style>
