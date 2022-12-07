<template>
	<div class="card">
		<!-- $slots 로 slot 정보가 없으면 표시하지 않도록 함 -->
		<div v-if="$slots.header" class="card-header">
			<!-- <slot name="header" header-message="헤더 메시지">#Default Header</slot> -->
			<slot name="header"></slot>
		</div>
		<div class="card-body">
			<slot :child-message="childMessage" hello-message="안녕하세요!">
				#Default Body
			</slot>
		</div>
		<div v-if="hasFooter" class="card-footer text-muted">
			<!-- <slot name="footer" footer-message="푸터 메시지">#Default Footer</slot> -->
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
	setup(prof, { slots }) {
		// slots arg 받을 수 있음
		const childMessage = ref('자식 컴포넌트의 메시지');

		const hasFooter = computed(() => slots.footer);
		return { childMessage, hasFooter };
	},
};
</script>

<style lang="scss" scoped></style>
