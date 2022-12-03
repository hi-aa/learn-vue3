<template>
	<div>
		<!-- 버블링은 내부에서 외부 요소로, 캡처링은 바깥에서 내부로..
		capture 모드에서는 Span 클릭하면 Div 부터 실행됨  -->
		<div id="modifier" @click.capture="clickDiv">
			Div 영역
			<!-- <p @click="clickP"> -->
			<p @click.self="clickP">
				<!-- 이벤트에 self를 달면 자기자신을 클릭했을 때만(타깃이 self일 때만) 이벤트가 동작함
				버블링X -->
				P영역
				<!-- <span @click.stop="clickSpan"> Span 영역 </span> -->
				<span @click="clickSpan"> Span 영역 </span>

				<a href="https://www.naver.com" @click.prevent.stop="clickA"
					>기본기능 막고 이벤트 전파도 막을 수 있음</a
				>
			</p>
		</div>

		<a href="https://www.naver.com" @click.prevent="clickA">Prevent 테스트</a>
		<br />
		<button @click.once="clickDiv">once</button>
	</div>
</template>

<script>
export default {
	setup() {
		// 내부의 엘리먼트를 선택했을 때
		// 이벤트 전파에 의해 부모?의 이벤트까지 호출됨
		const clickDiv = () => {
			console.log('Click Div');
			// console.log('상세페이지 이동');
		};
		const clickP = () => {
			console.log('Click P');
		};
		const clickSpan = () => {
			// stopPropagation을 추가해서 (.stop) 해당 이벤트 발생 후 전파 막음
			console.log('Click Span');
			// console.log('좋아요');
		};
		const clickA = () => {
			console.log('Click A');
		};
		return { clickDiv, clickP, clickSpan, clickA };
	},
};
</script>

<style scoped>
#modifier div,
#modifier p,
#modifier span {
	padding: 40px;
}
#modifier div {
	background-color: #ccc;
}
#modifier p {
	background-color: #999;
}
#modifier span {
	background-color: #666;
	display: block;
}
</style>
