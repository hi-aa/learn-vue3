<template>
	<main>
		<div class="container py-4">
			<!-- non-prop 속성은 props나 event에 명시적으로 선언되지 않은 속성 또는 이벤트 -->
			<!-- non-prop 속성은 컴포넌트의 루트(<<<) 엘리먼트에 상속됨 -->
			<MyButton
				@click="sayHello"
				class="my-button"
				id="my-button-id"
			></MyButton>

			<!-- non-prop속성으로 자동 상속되는 것 때문에 예상하지 못한 동작이 실행될 수 있으니
            왠만하면 emits이나 props 명시적으로 선언할 것 -->
		</div>
	</main>
</template>

<script>
import MyButton from '@/components/MyButton.vue';

export default {
	components: {
		MyButton,
	},
	setup() {
		const sayHello = () => {
			alert('안녕하세요');
		};
		return { sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
