<template>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title">Card title</h5>
			<p class="card-text">
				Some quick example text to build on the card title and make up the bulk
				of the card's content.
			</p>
			<a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
	</div>
</template>

<script>
import { ref, useCssModule } from 'vue';

export default {
	setup() {
		// console.log('app card setup');

		// style에 module 속성을 넣어서 사용하는 경우
		// const style = useCssModule();
		// console.log(style); // {red: '_red_13fes_3'} // 스크립트로 가져와서 사용 가능

		const varColor = ref('red');
		return { varColor };
	},
};
</script>

<!-- <style lang="scss" scoped></style> -->

<!-- style에 module 속성을 넣으면 css 클래스를 $style 객체의 속성으로 노출한다
:class="$style.red" // 이렇게 추가 가능 -->
<!-- <style module> -->

<!-- module에 이름 지정가능
:class="classes.red" 로 사용 가능 -->
<!-- <style module="classes">
.red {
	color: red !important;
}
</style> -->

<!-- style에 v-bind를 이용해서 값을 설정할 수 있음 -->
<!-- <style>
.red {
	color: v-bind(varColor) !important;
}
</style> -->
