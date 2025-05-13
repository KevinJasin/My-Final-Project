<template>
  <section class="flex flex-col w-full max-w-[1600px] text-neutral-700 px-5 md:px-0">
    <!-- Top Divider -->
    <div class="flex shrink-0 h-px bg-neutral-700 w-full"></div>

    <!-- Heading -->
    <h2
      class="self-end mt-44 text-6xl font-light leading-[66px] w-[1060px]
             max-md:self-center max-md:mt-10 max-md:text-4xl max-md:leading-[49px] max-md:text-center max-md:w-full"
    >
      Algoritmis muudame õppimise põnevaks seikluseks, mis stimuleerib huvi teadmiste vastu.
    </h2>

    <!-- Description -->
    <p class="self-center mt-5 leading-6 w-[520px] text-center max-md:max-w-full max-md:px-2">
      Meie mängulised meetodid aitavad lastel omandada isegi keerukaid teemasid lihtsalt ja
      rõõmsalt, luues oskusi, mis jäävad nendega kogu eluks.
    </p>

    <!-- Button -->
    <button
      class="gap-2.5 self-center px-5 py-4 mt-10 text-white bg-neutral-700 rounded-[30px] w-[520px] max-w-full"
      @click="handleRegisterClick"
    >
      Registreeru tunnile
    </button>
  </section>
</template>

<script>
import { nextTick } from 'vue';

export default {
  name: 'CallToActionSection',
  mounted() {
    this.scrollToSection();
  },
  watch: {
    '$route.hash': 'scrollToSection',
  },
  methods: {
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
      this.$router.push('/contact').then(() => {
        requestAnimationFrame(() => {
          const registerSection = document.querySelector('#register');
          if (registerSection) {
            registerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    },
  },
};
</script>
