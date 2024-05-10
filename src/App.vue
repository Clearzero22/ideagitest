<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Border from './components/Border.vue';
import Mycontainer from './components/Mycontainer.vue';
import Aside from './components/Aside.vue';
import Myicon from './components/Myicon.vue';
import MyLayout from './components/MyLayout.vue';
import Link from './components/Link.vue';
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo"/>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo"/>
    </a>
  </div>
  <!-- 使用Border组件 -->
  <h1>使用我的border组件</h1>
  <MyLayout/>
  <div>这是dev 的相关内容</div>
  <div>提交dev的相关内容</div>

  <div>测试内容哈哈哈</div>
  <div>这个是新的测试内容主要是master版本</div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em rgba(196, 162, 246, 0.67));
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
