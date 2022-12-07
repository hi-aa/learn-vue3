<template>
	<div>{{ msg }}</div>
	<div>{{ message }}</div>
	<input type="text" v-model="message" />
	<button @click="sayHello">button</button>

	<!-- 동일한 컴포넌트를 여러개 사용할 때 한번만 호출하고 싶은 경우, 컴포넌트 별로 호출하는 경우
  script setup은 컴포넌트마다 각각 호출 // 당연함.. setup이니..
  normal script는 한번만 호출됨 -->

	<PostItem
		type="news"
		title="타이틀~"
		content="ㅊㅊㅊㅊ"
		:is-like="true"
	></PostItem>
	<PostItem
		type="news"
		title="타이틀~"
		content="ㅊㅊㅊㅊ"
		:is-like="true"
	></PostItem>
	<PostItem
		type="news"
		title="타이틀~"
		content="ㅊㅊㅊㅊ"
		:is-like="true"
	></PostItem>

	<TemplateRefChild ref="child"></TemplateRefChild>
	<template v-if="child">{{ child.message }}</template>

	<hr />
	<MyButton class="parent-class">ddd</MyButton>
</template>

<script setup>
import axios from 'axios';
import PostItem from '@/components/setup/PostItem.vue'; // componets 등록 필요 없음
import TemplateRefChild from '@/components/setup/TemplateRefChild.vue';
import MyButton from '@/components/setup/MyButton.vue';

import { ref } from 'vue';

const msg = 'Hello World!'; // return 필요없는건 좋다
const message = ref('Hello');
const sayHello = () => {
	console.log('여기는 이제 setup');
	alert('hello');
};

// <script setup>을 사용하는 컴포넌트는 기본적으로 Template Refs나 $parents와 같이 컴포넌트간 통신이 닫혀있음
const child = ref(null); // null로 생성한 변수 // dom 마운트 되면 해당 변수를 ref로 가진 엘리먼트를 가리킴

// async/await 사용하기
// script setup을 사용하면 async function 설정하지 않고 바로 await 호출할 수 있음
const response = await axios('https://dummyjson.com/products/1');
console.log('response:', response);
</script>

<style lang="scss" scoped></style>
