<template>
	<button class="btn btn-primary" type="button" v-bind="$attrs">Button</button>
	<!-- {{ $attrs }} 로 접근 가능
    속성이랑 이벤트 모두 attrs에 포함됨
    필요한 곳에 v-bind로 바인딩 가능 -->
</template>

<script>
export default {
	inheritAttrs: false, // non-prop 속성의 상속을 막음
	setup(props, context) {
		// 속성이 바로 상속되어 적용되는건 막았어도 따로 접근할 수 있음
		console.log(context.attrs);
		console.log(context.attrs.class);
		console.log(context.attrs.id);
		console.log(context.attrs.onClick);
		context.attrs.onClick(); // attrs에서 이벤트 호출할때는 on 붙임
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
