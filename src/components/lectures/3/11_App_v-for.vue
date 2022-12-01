<template>
	<div>
		<ul>
			<!-- key에는 고유한 값을 지정해야 한다(2.2.0부터 필수) -->
			<!-- v-for와 v-if를 같은 엘리먼트에서 사용하는것을 권장하지 않는다.
			템플릿을 추가하여 분리 가능 -->
			<template v-for="(item, index) in items" :key="item.id">
				<li v-if="index % 2 === 0">{{ item.message }} {{ index }}</li>
			</template>
		</ul>
		<hr />
		<ul>
			<li v-for="item in evenItems" :key="item.id">{{ item.message }}</li>
		</ul>

		<hr />
		<!-- object를 v-for로 돌리면 key를 돌릴 수 있음. map keySet 같네 -->
		<ul>
			<li v-for="(value, key, index) in myObject" :key="key">
				{{ index }} - {{ key }} - {{ value }}
			</li>
		</ul>
	</div>
</template>

<script>
import { computed } from 'vue';
import { reactive } from 'vue';

export default {
	setup() {
		const items = reactive([
			{ id: 1, message: 'JAVA' },
			{ id: 2, message: 'HTML' },
			{ id: 3, message: 'Javascript' },
			{ id: 4, message: 'CSS' },
		]);
		const evenItems = computed(() => items.filter(item => item.id % 2 === 0));

		const myObject = reactive({
			title: '제목입니다',
			key1: '키1',
			publishedDate: '2022-12-01',
		});
		return { items, evenItems, myObject };
	},
};
</script>

<style lang="scss" scoped></style>
