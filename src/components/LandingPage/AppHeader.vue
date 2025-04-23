<template>
  <h1 class="sr-only">Algoritm – Hariduskeskus</h1>
  <header id="top"
    class="relative z-50 flex flex-col items-center w-full text-lg text-neutral-700 min-h-[900px] px-5 pt-6 md:px-20"
  >
    <!-- Background for Desktop -->
<img
  src="/KuBackground.webp"
  alt="Desktop Background"
  class="hidden md:block absolute inset-0 w-full h-full object-cover object-center -z-10"
/>

<!-- h2 two-line title under logo (desktop only) -->
<div
  class="hidden md:flex flex-col absolute bottom-[80px] items-center w-full text-center text-neutral-700 font-roboto"
>
  <span class="text-4xl leading-tight">Hariduskeskus</span>
  <span class="text-4xl leading-tight">koolilastele</span>
</div>


<!-- Background for Mobile -->
<img
  src="/KuBackgroundMobile.webp"
  alt="Mobile Background"
  class="block md:hidden absolute inset-0 w-full h-full object-cover object-top -z-10"
/>

<!-- h2 two-line title under logo (mobile only) -->
<div
  class="md:hidden flex flex-col absolute bottom-[50px] items-center w-full text-center text-neutral-700 font-roboto"
>
  <span class="text-3xl leading-tight">Hariduskeskus</span>
  <span class="text-3xl leading-tight">koolilastele</span>
</div>




    <!-- Top Bar -->
    <div class="w-full max-w-[1600px] flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/">
        <img src="/Logo.webp" alt="Company logo" class="w-[141px] object-contain" />
      </router-link>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-10 items-center whitespace-nowrap">
        <a href="#courses" @click.prevent="scrollToCourses" class="text-black">Kursused</a>
        <router-link to="/center"><a class="text-black opacity-50">Keskusest</a></router-link>
        <router-link to="/contact"><a class="text-black opacity-50">Kontaktid</a></router-link>
      </nav>

      <!-- Desktop Language + Register -->
      <div class="hidden md:flex gap-10 mt-2 items-center">
        <div class="flex gap-1 items-center whitespace-nowrap">
          <span class="self-stretch my-auto w-[17px] opacity-50">ru</span> <span class="flex flex-col justify-center self-stretch my-auto w-4">et</span>
        </div>
        <button class="bg-neutral-700 text-white px-5 py-2 rounded-full" @click="handleRegisterClick">
          Registreeru tunnile
        </button>
      </div>

      <!-- Burger Button (Mobile) -->
      <button class="md:hidden z-50" @click="toggleMenu">
        <svg class="w-8 h-8 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Divider (desktop only) -->
    <div class="hidden md:block mt-4 h-px w-full max-w-[1600px] bg-neutral-700"></div>

    <!-- Fullscreen Mobile Menu -->
    <div
      v-if="menuOpen"
      class="fixed inset-0 bg-[#eaf0f7] z-40 flex flex-col items-center justify-between py-12 px-5 text-center"
    >
      <div class="flex flex-col items-center gap-10">
        <router-link to="/" @click="closeMenu">
         <img src="/Logo.webp" alt="Logo" class="w-[180px]" />
        </router-link>
        <a href="#courses" @click.prevent="handleMobileScrollToCourses" class="text-xl">Kursused</a>
        <router-link to="/center" @click="closeMenu" class="text-xl">Keskusest</router-link>
        <router-link to="/contact" @click="closeMenu" class="text-xl">Kontaktid</router-link>
        <router-link to="/contact#register" @click="closeMenu"
          class="mt-6 bg-neutral-700 text-white px-6 py-3 rounded-full text-lg">
          Registreeru tunnile
        </router-link>
      </div>

      <div class="text-base text-neutral-500 mt-10">
        Русский язык <span class="ml-2 font-semibold text-black">Eesti keel</span>
      </div>
    </div>
  </header>
</template>

<script>
import { nextTick } from 'vue';

export default {
  name: 'AppHeader',
  data() {
    return {
      menuOpen: false,
    };
  },
  mounted() {
    this.scrollToSection();
  },
  watch: {
    '$route.hash': 'scrollToSection',
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    scrollToSection() {
      nextTick(() => {
        const hash = this.$route.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    },
    handleRegisterClick() {
      if (window.location.pathname === '/contact') {
        const registerSection = document.getElementById('register');
        if (registerSection) {
          registerSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        this.$router.push('/contact').then(() => {
          setTimeout(() => {
            const registerSection = document.getElementById('register');
            if (registerSection) {
              registerSection.scrollIntoView({ behavior: 'smooth' });
            }
          }, 500);
        });
      }
    },
    scrollToCourses() {
      const element = document.getElementById('courses');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        this.$router.push('/#courses').then(() => {
          setTimeout(() => {
            const elem = document.getElementById('courses');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }, 500);
        });
      }
    },
    handleMobileScrollToCourses() {
      this.closeMenu();
      if (this.$route.path !== '/') {
        this.$router.push('/').then(() => {
          setTimeout(() => {
            const element = document.getElementById('courses');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 500);
        });
      } else {
        const element = document.getElementById('courses');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }
};
</script>
