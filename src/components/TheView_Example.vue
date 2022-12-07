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

			<hr />
			<FancyButton>Click<span style="color: red">color</span></FancyButton>
			<!-- 디폴트는 v-slot으로 받거나 template을 사용하거나 -->
			<!-- 이름이 있는 슬롯은 이름 표시해서 v-slot:[name입력] 혹은 템플릿 사용하거나 -->
			<FancyButton v-slot="{ fancyMessage }">{{ fancyMessage }}</FancyButton>

			<hr />
			<!-- Slot name별로 설정 -->
			<AppCard>
				<!-- <template v-slot:header>제목</template> -->
				<template #[slotArgs]>제목 Args</template>
				<!-- <template #default>내용</template> -->
				암시적으로 작성한 Default 슬롯
				<template #footer>푸터</template>
			</AppCard>

			<hr />
			<!-- 하위 컴포넌트에 slot으로 보낸 값을 하위 컴포넌트에서 접근할 수 없음 // 당연함..ㅇㅇ -->
			<!-- Scoped Slot: props를 전달하는 것 처럼 slot을 통해 자식 컴포넌트에서 부모 컴포넌트로 전달할 수 있음 -->
			<AppCard>
				<template #default="obj">
					{{ obj }}<br />
					{{ obj.helloMessage }}
				</template>
				<!-- <template #header="headerObj">
					{{ headerObj.headerMessage }}
				</template>
				<template #footer="footerObj">
					{{ footerObj.footerMessage }}
				</template> -->
			</AppCard>
		</div>
	</main>
</template>

<script>
import MyButton from '@/components/MyButton.vue';
import FancyButton from '@/components/FancyButton.vue';
import AppCard from '@/components/AppCard.vue';
import { reactive, ref } from 'vue';

export default {
	components: {
		MyButton,
		FancyButton,
		AppCard,
	},
	setup() {
		const sayHello = () => {
			console.log('안녕하세요');
		};
		const slotArgs = ref('header');
		return { sayHello, slotArgs };
	},
};
</script>

<style lang="scss" scoped></style>
