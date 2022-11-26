<template>
	<h2>{{ teacher.name }}</h2>

	<h3>강의가 있습니까?</h3>
	<!-- <p>{{ teacher.lectures.length > 0 ? '있다' : '없다' }}</p> -->
	<p>{{ hasLecture }}</p>
	<p>{{ existLecture() }}</p>
	<p>{{ hasLecture }}</p>
	<p>{{ existLecture() }}</p>
	<p>{{ hasLecture }}</p>
	<p>{{ existLecture() }}</p>
	<button v-on:click="counter++">counter {{ counter }}</button>
	<!-- counter 이벤트 발생할 때 컴포넌트가 다시 랜더링 되네요
    그 때마다 method는 다시 호출됨 -->
	<hr />
	<p>{{ fullName }}</p>
	<p>{{ fullName2 }}</p>
</template>

<script>
import { computed, ref } from 'vue';
import { reactive } from 'vue';

export default {
	setup() {
		const teacher = reactive({
			name: '짐코딩',
			lectures: ['HTML/CSS', 'Javascript', 'Vue3'],
		});
		// computed 함수
		const hasLecture = computed(() => {
			// computed는 결과를 캐시함
			console.log('computed');
			return teacher.lectures.length > 0 ? '있다' : '없다'; // 반응형 데이터가 변경될 때 다시 계산 // 성능에 조금 더 유리함
		});
		// 이건 그냥 메서드
		const existLecture = () => {
			console.log('method');
			return teacher.lectures.length > 0 ? '있다' : '없다';
		};

		const counter = ref(0);

		let firstName = ref('홍');
		let lastName = ref('길동');
		const fullName = computed(() => firstName.value + ' ' + lastName.value);
		// fullName.value = '김 길동'; // 경고표시 // Write operation failed: computed value is readonly
		// console.log(fullName.value);

		// computed는 기본적으로 getter 전용
		// 값 할당이 필요하다면 get, set 메소드를 선언해서 getter와 setter를 만들어줄 수 있음
		const fullName2 = computed({
			get() {
				return firstName.value + ' ' + lastName.value;
			},
			set(value) {
				[firstName.value, lastName.value] = value.split(' ');
			},
		});
		fullName2.value = '김 길동';

		return { teacher, hasLecture, existLecture, counter, fullName, fullName2 };
	},
};
</script>

<style lang="scss" scoped></style>
