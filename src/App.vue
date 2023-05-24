<template>
  <div>
  <link rel="stylesheet" href="assets/css/style.css">
      <header class="cd-main-header js-cd-main-header">
      <div class="cd-logo-wrapper">
        <router-link class="sidenav-link" to="/"><img src="assets/img/cd-logo.png" alt="Logo"></router-link>
      </div>
      <button class="reset cd-nav-trigger js-cd-nav-trigger" aria-label="Toggle menu"><span></span></button>
      <ul class="cd-nav__list js-cd-nav__list">
        <li class="cd-nav__item"><router-link class="sidenav-link" to="/about">About</router-link></li>
        <li class="cd-nav__item cd-nav__item--has-children cd-nav__item--account js-cd-item--has-children">
          <a href="#0">
            <img src="assets/img/Account.png" alt="avatar">
            <span>Account</span>
          </a>
          <ul class="cd-nav__sub-list">
            <li class="cd-nav__sub-item"><a href="#0">My Account</a></li>
            <li class="cd-nav__sub-item"><a href="#0">Edit Account</a></li>
            <li class="cd-nav__sub-item"><a href="#0">Logout</a></li>
          </ul>
        </li>
      </ul>
    </header> <!-- .cd-main-header -->
     <main class="cd-main-content">
      <nav class="cd-side-nav js-cd-side-nav">
        <ul class="cd-side__list js-cd-side__list">
          <li class="cd-side__label"><span>จัดการสมาชิก</span></li>
          <li class="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
            <router-link class="sidenav-link" to="/">รายการสมาชิก</router-link>
          </li>
        </ul>
        <ul class="cd-side__list js-cd-side__list">
          <li class="cd-side__label"><span>เพิ่มสมาชิก</span></li>
          <li class="cd-side__btn"><button @click="$router.push('/adduser')">+ เพิ่มสมาชิก</button></li>
        </ul>
      </nav> 
      <div class="cd-content-wrapper">
        <div>
          <router-view></router-view>
        </div>
      </div> <!-- .content-wrapper -->
      </main> <!-- .cd-main-content -->
      <link rel="stylesheet" href="assets/css/style.css">
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import MyCard from "@/components/MyCard.vue";
export default defineComponent({
    name: 'App',
    components: {
        MyCard,
    },
    setup() {
        {
            
        }
    },
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
