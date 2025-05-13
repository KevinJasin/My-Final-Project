<template>
  <header
  class="relative z-50 flex flex-col items-center w-full text-lg text-neutral-700 px-5 pt-4 md:px-20
         min-h-[600px] md:min-h-[900px] lg:min-h-[1000px] xl:min-h-[1200px]"
>
    <!-- Background image (desktop) -->
    <img
      loading="lazy"
      src="/KeBackground.webp"
      alt="Background"
      class="hidden md:block absolute inset-0 w-full h-full object-cover -z-10"
    />

    <!-- Background image (mobile) -->
    <img
  loading="lazy"
  src="/KeBackgroundMobile.webp"
  alt="Mobile Background"
  class="block md:hidden absolute inset-0 w-full h-full max-h-[600px] object-cover object-top -z-10"
/>

    <!-- Top Bar -->
    <div class="w-full max-w-[1600px] flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/">
        <img src="/Logo.webp" alt="Logo" class="w-[141px] object-contain" />
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex gap-10 items-center whitespace-nowrap">
        <router-link to="/#courses">
          <a class="text-black opacity-50">Kursused</a>
        </router-link>
        <router-link to="/center">
          <a class="text-black">Keskusest</a>
        </router-link>
        <router-link to="/contact">
          <a class="text-black opacity-50">Kontaktid</a>
        </router-link>
      </nav>

      <!-- Language + Button (Desktop Only) -->
      <div class="hidden md:flex gap-10 mt-2">
        <button
          class="bg-neutral-700 text-white px-5 py-2 rounded-full"
          @click="handleRegisterClick"
        >
          Registreeru tunnile
        </button>
      </div>

      <!-- Burger (mobile) -->
      <button class="md:hidden z-50" @click="toggleMenu">
        <svg class="w-8 h-8 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            v-if="!menuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Divider -->
    <div class="hidden md:block mt-4 h-px w-full max-w-[1600px] bg-neutral-700"></div>

    <!-- Mobile Fullscreen Menu -->
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

    </div>
  </header>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'HeaderTwo',
  emits: ['scroll-to-register'],
  setup(_, { emit }) {
    const router = useRouter();
    const menuOpen = ref(false);

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const closeMenu = () => {
      menuOpen.value = false;
    };

    const handleRegisterClick = () => {
      if (window.location.pathname === '/contact') {
        emit('scroll-to-register');
      } else {
        router.push('/contact').then(() => {
          setTimeout(() => {
            const registerSection = document.getElementById('register');
            if (registerSection) {
              registerSection.scrollIntoView({ behavior: 'smooth' });
            }
          }, 500);
        });
      }
    };

    const handleMobileScrollToCourses = () => {
      closeMenu();
      if (window.location.pathname === '/') {
        const elem = document.getElementById('courses');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push('/#courses').then(() => {
          setTimeout(() => {
            const elem = document.getElementById('courses');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }, 500);
        });
      }
    };

    return {
      menuOpen,
      toggleMenu,
      closeMenu,
      handleRegisterClick,
      handleMobileScrollToCourses,
    };
  },
};
</script>
