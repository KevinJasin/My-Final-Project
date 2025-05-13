<template>
  <header
    class="relative z-50 flex flex-col items-center w-full text-lg text-neutral-700 px-5 pt-4 md:px-20"
  >
    <!-- Top Bar -->
    <div class="w-full max-w-[1600px] flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/">
        <img
          loading="lazy"
          src="/Logo.webp"
          alt="Company logo"
          class="object-contain w-[141px]"
        />
      </router-link>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-10 items-center whitespace-nowrap">
        <router-link to="/#courses">
          <a class="opacity-50 text-black">Kursused</a>
        </router-link>
        <router-link to="/center">
          <a class="opacity-50 text-black">Keskusest</a>
        </router-link>
        <router-link to="/contact">
          <a class="opacity-50 text-black">Kontaktid</a>
        </router-link>
      </nav>

      <!-- Language + Button (Desktop) -->
      <div class="hidden md:flex gap-10 mt-2">
        <button
          class="bg-neutral-700 text-white px-4 py-2 rounded-full"
          @click="handleRegisterClick"
        >
          Registreeru tunnile
        </button>
      </div>

      <!-- Burger Button (Mobile) -->
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
    <div class="mt-3 h-px bg-neutral-700 w-full max-w-[1600px]"></div>

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
        <button
          class="mt-6 bg-neutral-700 text-white px-6 py-3 rounded-full text-lg"
          @click="handleRegisterClick"
        >
          Registreeru tunnile
        </button>
      </div>

    </div>
  </header>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'NoHeader',
  setup() {
    const menuOpen = ref(false);
    const router = useRouter();

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const closeMenu = () => {
      menuOpen.value = false;
    };

    const handleRegisterClick = () => {
      closeMenu();
      if (window.location.pathname === '/contact') {
        const registerSection = document.getElementById('register');
        if (registerSection) {
          registerSection.scrollIntoView({ behavior: 'smooth' });
        }
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
