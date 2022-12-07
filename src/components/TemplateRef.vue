<template>
	<div class="container py-4">
		<input type="text" ref="input" />
		<p>{{ input }}</p>
		<!-- ref는 mount가 완료될 때까지 null이므로
    mount 이후에 생성될 수 있게 v-if -->
		<p v-if="input">
			{{ input.value }}, {{ $refs.input.value }}<br />
			$refs.input.value === input.value :
			{{ $refs.input.value === input.value }} // true
		</p>

		<hr />
		<ul>
			<!-- <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{ fruit }}</li> -->
			<li
				v-for="fruit in fruits"
				:key="fruit"
				:ref="el => itemRefs.push(el.textContent)"
			>
				{{ fruit }}
			</li>
		</ul>

		<hr />
		<!-- ref는 자식 컴포넌트에도 사용가능함.
      다만 부모/자식 컴포넌트간 의존도가 생기므로 props나 emit을 이용하여 부모자식간 상호작용을 구현하는 쪽을 추천 -->
		<TemplateRefChild ref="child"></TemplateRefChild>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';

import TemplateRefChild from './TemplateRefChild.vue';

export default {
	components: {
		TemplateRefChild,
	},
	setup() {
		const input = ref(null); // ref로 DOM 요소에 접근할 수 있음
		onMounted(() => {
			// onMountd 이후에 사용가능
			input.value.value = 'hello world';
			console.log(input.value);

			// itemRefs.value.forEach(item => console.log('item:', item.textContent)); // get element text
			itemRefs.value.forEach(item => console.log('item:', item));

			console.log('child:', child.value.message);
			child.value.sayHello();
		});

		const fruits = ref(['사과', '딸기', '포도']);
		const itemRefs = ref([]); // 해당 ref는 mount된 이후에 채워짐 // DOM

		const child = ref(null);
		return { input, fruits, itemRefs, child };
	},
};
</script>

<style lang="scss" scoped></style>
