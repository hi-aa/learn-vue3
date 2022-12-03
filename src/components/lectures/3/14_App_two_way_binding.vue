<template>
	<div>
		<h2>Input Value</h2>
		<!-- v-model로 양방향 바인딩 -->
		<input type="text" v-model.number="inputValue" />
		<!-- <input type="text" v-model.lazy="inputValue" /> -->
		<!-- <input type="text" :value="inputValue" /> -->
		<div>{{ inputValue }}</div>
		<div>{{ typeof inputValue }}</div>

		<!-- lazy: 원래는 키입력할 때마다 바로 값이 동기화 되는데
		lazy 수식어를 써서 change 이후에 업데이트 되도록 할 수 있음 -->
		<!-- number: value 타입를 숫자형으로 받아줌 -->
		<!-- trim: 앞뒤 공백제거 -->

		<h2>Textarea value</h2>
		<textarea v-model="textareaValue"></textarea>
		<div>{{ textareaValue }}</div>

		<h2>Checkbox value</h2>
		<label for="checkbox">checked: {{ checkboxValue }}</label>
		<!-- v-model없이 양방향 바인딩 하려면 이벤트로 구현해야 함 -->
		<!-- <input
			type="checkbox"
			id="checkbox"
			:checked="checkboxValue"
			@change="
				event => {
					checkboxValue = event.target.checked;
				}
			"
		/> -->
		<input
			type="checkbox"
			id="checkbox"
			v-model="checkboxValue"
			true-value="Y"
			false-value="N"
		/>

		<h2>Checkbox value2</h2>
		<label>
			HTML
			<input
				type="checkbox"
				id="checkbox"
				v-model="checkboxValue2"
				value="html"
			/>
		</label>
		<label>
			CSS
			<input
				type="checkbox"
				id="checkbox"
				v-model="checkboxValue2"
				value="css"
			/>
		</label>
		<label>
			JQuery
			<input
				type="checkbox"
				id="checkbox"
				v-model="checkboxValue2"
				value="jquery"
			/>
		</label>

		<h2>Radio Value</h2>
		<label>
			<input type="radio" id="radio" value="O" v-model="radioValue" />
			O형
		</label>
		<label>
			<input type="radio" id="radio" value="A" v-model="radioValue" />
			A형
		</label>
		<div>{{ radioValue }}</div>

		<h2>Select Value</h2>
		<select v-model="selectValue">
			<option value="html">HTML</option>
			<option value="css">CSS</option>
			<option value="jquery">JQuery</option>
		</select>
		<div>{{ selectValue }}</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref('');
		const textareaValue = ref('');
		const checkboxValue = ref('N');
		const checkboxValue2 = ref(['css']);
		const radioValue = ref('O');
		const selectValue = ref('html');

		return {
			inputValue,
			textareaValue,
			checkboxValue,
			checkboxValue2,
			radioValue,
			selectValue,
		};
	},
};
</script>

<style lang="scss" scoped></style>
