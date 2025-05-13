<template>
  <header
    class="relative z-50 flex flex-col items-center self-stretch px-5 pt-4 w-full text-lg text-neutral-700 md:min-h-[550px] md:pb-[450px] max-md:pb-24 md:px-20 max-md:max-w-full"
  >
    <!-- Desktop background -->
    <img
      loading="lazy"
      src="/KoBackground.webp"
      alt="Taust"
      class="hidden md:block object-cover absolute inset-0 w-full h-full -z-10"
    />

    <!-- Mobile background -->
    <img
      loading="lazy"
      src="/KoBackgroundMobile.webp"
      alt="Mobile BG"
      class="block md:hidden object-cover absolute inset-0 w-full h-[300px] -z-10"
    />

    <!-- Top bar -->
    <div class="w-full max-w-[1600px] flex justify-between items-start pt-0 md:pt-2 md:items-center">
      <!-- Logo -->
      <router-link to="/">
        <img
          src="/Logo.webp"
          alt="Company logo"
          class="object-contain w-[141px]"
        />
      </router-link>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-10 items-center whitespace-nowrap">
        <router-link to="/#courses"><a class="opacity-50 text-black">Kursused</a></router-link>
        <router-link to="/center"><a class="opacity-50 text-black">Keskusest</a></router-link>
        <router-link to="/contact"><a class="text-black">Kontaktid</a></router-link>
      </nav>

      <!-- Lang + Button (desktop only) -->
      <div class="hidden md:flex gap-10 mt-2">
        <button class="bg-neutral-700 text-white px-4 py-2 rounded-full" @click="$emit('scroll-to-register')">
          Registreeru tunnile
        </button>
      </div>

      <!-- Burger Button (Mobile only) -->
      <button class="md:hidden z-50 mt-1" @click="toggleMenu">
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

    <!-- Mobile fullscreen menu -->
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
          @click="handleMobileRegister"
        >
          Registreeru tunnile
        </button>
      </div>

    </div>
  </header>
</template>


<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'PageHeader',
  emits: ['scroll-to-register'],
  setup(_, { emit }) {
    const menuOpen = ref(false)
    const isDesktop = ref(window.innerWidth >= 768)
    const router = useRouter()

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }

    const closeMenu = () => {
      menuOpen.value = false
    }

    const handleMobileScrollToCourses = () => {
      closeMenu()
      if (window.location.pathname === '/') {
        const elem = document.getElementById('courses')
        if (elem) elem.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push('/#courses').then(() => {
          setTimeout(() => {
            const elem = document.getElementById('courses')
            if (elem) elem.scrollIntoView({ behavior: 'smooth' })
          }, 500)
        })
      }
    }

    const handleMobileRegister = () => {
      closeMenu()
      emit('scroll-to-register')
    }

    onMounted(() => {
      window.addEventListener('resize', () => {
        isDesktop.value = window.innerWidth >= 768
      })
    })

    return {
      menuOpen,
      toggleMenu,
      closeMenu,
      handleMobileScrollToCourses,
      handleMobileRegister,
      isDesktop
    }
  }
}
</script>
