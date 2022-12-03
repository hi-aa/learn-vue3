<template>
	<div>
		<div>x: {{ y }}</div>
	</div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
	setup() {
		const x = ref(0);
		const y = ref(0);

		// watch(
		// 	() => x.value + y.value,
		// 	(sum, oldValue) => {
		// 		console.log({ sum, oldValue });
		// 	},
		// );
		watch([x, y], ([newX, newY]) => {
			console.log(newX, newY);
		});

		const obj = reactive({ count: 1 });
		// watch(obj, (newValue, oldValue) => {
		// 	console.log(oldValue); // oldValue와 newValue가 같은 객체를 가리키기 때문에 oldValue가 newValue와 동일하게 나옴
		// 	console.log(newValue);
		// });
		// console.log(typeof obj.count);
		// obj.count는 반응형 데이터가 아니라 newValue가 찍히지 않음

		// 특정 객체의 속성을 감지하고 싶으면 getter함수로 넣어준다
		// watch(
		// 	() => obj.count,
		// 	(newValue, oldValue) => {
		// 		console.log(oldValue);
		// 		console.log(newValue);
		// 	},
		// );

		const person = reactive({
			name: '홍길동',
			age: 30,
			hobby: '운동',
			obj: {
				count: 0,
			},
		});
		// 암시적으로 깊은 감시자
		// obj.count가 변경되어도 호출됨
		// watch(person, newValue => {
		// 	console.log('newValue: ', newValue);
		// });

		// 하지만 getter 함수로 obj를 watch하면
		// obj 객체 자체가 변경되었을 때 watch가 실행됨
		watch(
			() => person.obj,
			newValue => {
				console.log('newValue: ', newValue);
			},
		);

		return { x, y, obj, person };
	},
};
</script>

<style lang="scss" scoped></style>
