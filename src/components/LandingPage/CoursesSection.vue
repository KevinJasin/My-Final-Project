<template>
  <section id="courses" class="flex flex-col w-full max-w-[1600px] text-neutral-700 mt-44 max-md:mt-10 px-5 md:px-0">
    <!-- Top Divider -->
    <div class="w-full h-px bg-neutral-700"></div>

    <!-- Matemaatika -->
    <div class="flex flex-col items-start mt-10 w-full max-w-[1200px]">
      <h2 class="text-lg self-start">Matemaatika</h2>
    </div>

    <!-- Eksami ettevalmistus -->
    <h3 class="text-6xl font-light leading-tight mt-6 ml-64 max-md:text-4xl max-md:ml-0">Eksami ettevalmistus põhikoolile</h3>

    <div class="flex flex-wrap gap-10 mt-6 max-w-[1000px] text-lg ml-64 max-md:ml-0">
      <div class="flex flex-col flex-1">
        <h4 class="font-semibold leading-tight opacity-80">Eksamiülesannete lahendamise oskused</h4>
        <p class="mt-1.5 leading-6 opacity-80">Õpilane õpib tõhusaid meetodeid keerukate ülesannete lahendamiseks ja väldib tüüpilisi vigu.</p>
      </div>
      <div class="flex flex-col flex-1">
        <h4 class="font-semibold leading-tight opacity-80">Teadmiste süstematiseerimine</h4>
        <p class="mt-1.5 leading-6 opacity-80">Oluliste teemade kordamine aitab täita lünki ja tugevdada baasteadmisi.</p>
      </div>
    </div>

    <div class="w-full h-px bg-neutral-700 mt-14 ml-64 max-w-[1000px] max-md:ml-0"></div>

    <!-- Edasijõudnud tase -->
    <h3 class="text-6xl font-light leading-tight mt-8 ml-64 max-md:text-4xl max-md:ml-0">Edasijõudnute tase</h3>

    <div class="flex flex-wrap gap-10 mt-6 max-w-[1000px] text-lg ml-64 max-md:ml-0">
      <div class="flex flex-col flex-1">
        <h4 class="font-semibold leading-tight opacity-80">Matemaatika huvi suurendamine</h4>
        <p class="mt-1.5 leading-6 opacity-80">Kursus köidab õpilasi praktiliste ülesannete ja interaktiivsete meetoditega.</p>
      </div>
      <div class="flex flex-col flex-1">
        <h4 class="font-semibold leading-tight opacity-80">Analüütilise mõtlemise arendamine</h4>
        <p class="mt-1.5 leading-6 opacity-80">Kursus arendab loogilist analüüsi ja kriitilist mõtlemist.</p>
      </div>
    </div>

    <div class="flex flex-col mt-8 max-w-[500px] text-lg ml-64 max-md:ml-0">
      <h4 class="font-semibold leading-tight opacity-80">Keeruliste teemade sügav mõistmine</h4>
      <p class="mt-1.5 leading-6 opacity-80">Uuritakse põhjalikult keerulisi kontseptsioone ja meetodeid.</p>
    </div>

    <div class="w-full h-px bg-neutral-700 mt-14 ml-64 max-w-[1000px] max-md:ml-0"></div>

    <!-- Puudujääkide täitmine -->
    <h3 class="text-6xl font-light leading-tight mt-8 ml-64 max-md:text-4xl max-md:ml-0">Puudujääkide täitmine</h3>

    <div class="flex flex-wrap gap-10 mt-6 max-w-[1000px] text-lg ml-64 max-md:ml-0">
      <div class="flex flex-col flex-1">
        <h4 class="font-semibold leading-tight opacity-80">Individuaalne lähenemine</h4>
        <p class="mt-1.5 leading-6 opacity-80">Õpetajad kohandavad kursust iga õpilase vajaduste järgi.</p>
      </div>
      <div class="flex flex-col flex-1">
        <h4 class="font-semibold leading-tight opacity-80">Õpitava materjali süstematiseerimine</h4>
        <p class="mt-1.5 leading-6 opacity-80">Kursus hõlmab kõiki võtmeteemasid, aidates õpilastel puudujäägid täita.</p>
      </div>
    </div>

    <div class="w-full h-px bg-neutral-700 mt-16 max-w-[1200px]"></div>

    <!-- Eesti keel -->
    <h2 class="text-lg self-start mt-5">Eesti keel</h2>

    <h3 class="text-6xl font-light leading-tight mt-4 ml-64 max-md:text-4xl max-md:ml-0">Vestlusklubi</h3>

    <div class="flex flex-wrap gap-10 mt-6 max-w-[1000px] text-lg ml-64 max-md:ml-0">
      <div class="flex flex-col flex-1">
        <h4 class="font-semibold leading-tight opacity-80">Enesekindlus suhtlemisel</h4>
        <p class="mt-1.5 leading-6 opacity-80">Regulaarne praktiline õpe aitab ületada keelebarjääri.</p>
      </div>
      <div class="flex flex-col flex-1">
        <h4 class="font-semibold leading-tight opacity-80">Sõnavara laiendamine</h4>
        <p class="mt-1.5 leading-6 opacity-80">Osalejad õpivad uusi sõnu ja väljendeid, mida igapäevaelus kasutatakse.</p>
      </div>
    </div>

    <div class="flex flex-col mt-8 max-w-[500px] text-lg ml-64 max-md:ml-0">
      <h4 class="font-semibold leading-tight opacity-80">Õppetunnid väikestes gruppides</h4>
      <p class="mt-1.5 leading-6 opacity-80">Formaat soodustab mugavat suhtlust ja aktiivset osalemist.</p>
    </div>

    <!-- Divider -->
    <div class="w-full h-px bg-neutral-700 mt-14 ml-64 max-w-[1000px] max-md:ml-0"></div>

    <!-- Register Button -->
    <button
      class="px-5 py-4 mt-10 text-lg text-white bg-neutral-700 rounded-[30px] w-[520px] ml-64 max-md:w-full max-md:ml-0"
      @click="handleRegisterClick"
    >
      Registreeru tunnile
    </button>
  </section>
</template>


<script>
import { nextTick } from 'vue';

export default {
  name: 'CoursesSection',
  methods: {
    handleRegisterClick() {
      if (this.$route.path === '/contact') {
        // ✅ If already on the Contact page, scroll immediately (No delay)
        this.smoothScrollToRegister();
      } else {
        // ✅ Navigate to Contact Page, then ensure we scroll AFTER full page load
        this.$router.push('/contact').then(() => {
          this.waitForElement('#register', 1000); // Wait up to 1 sec
        });
      }
    },

    smoothScrollToRegister() {
      nextTick(() => {
        const registerSection = document.getElementById('register');
        if (registerSection) {
          registerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    },

    waitForElement(selector, timeout = 1000) {
      let elapsed = 0;
      const interval = 100; // Check every 100ms

      const checkElement = setInterval(() => {
        const element = document.querySelector(selector);
        if (element) {
          clearInterval(checkElement);
          this.smoothScrollToRegister(); // ✅ Scroll when the element is ready
        }
        elapsed += interval;
        if (elapsed >= timeout) {
          clearInterval(checkElement);
          console.warn(`⚠️ Element ${selector} not found within ${timeout}ms`);
        }
      }, interval);
    }
  }
};
</script>





