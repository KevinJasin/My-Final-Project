<template>
  <section
    class="relative flex flex-col mt-44 w-full max-w-[1600px] text-neutral-700 max-md:mt-10 max-md:max-w-full px-5"
  >
    <!-- Top Divider -->
    <div class="w-full h-px bg-neutral-700"></div>

    <!-- Mobile Layout -->
    <div class="md:hidden flex flex-col items-start text-left mt-10">
      <div class=" text-3x1">Õppemeetod</div>
      <div class="text-3xl">Algoritmis</div>

      <!-- Mobile Image (Different Image File) -->
      <img
        src="/BacteriaMobile.png"
        alt="Õppemeetodi illustratsioon"
        class="w-[80%] mx-auto my-6"
      />

      <!-- Mobile Text Centered -->
      <div class="text-center text-5xl font-light leading-snug uppercase w-full px-2">
        <div>Õppimine mängu</div>
        <div>kaudu - areng</div>
        <div>naudinguga</div>
      </div>

      <!-- Button -->
      <div class="flex justify-center w-full mt-8">
        <router-link to="/center">
          <button
            class="px-12 py-3 text-lg text-white bg-neutral-700 rounded-[30px] w-[100%] max-w-[500px]"
          >
            Lisateave keskuse kohta
          </button>
        </router-link>
      </div>
    </div>

    <!-- Desktop Layout -->
    <div class="hidden md:flex flex-col relative z-10">
      <!-- Bacteria Image Behind Large Text -->
      <div class="absolute top-[270px] inset-x-0 flex justify-center items-center z-0 pointer-events-none">
        <img
          loading="lazy"
          src="/Bacteria.png"
          alt="Bacteria"
          class="w-[800px]"
        />
      </div>

      <!-- Section Titles -->
      <div class="text-lg mt-44">Õppemeetod</div>
      <div class="text-6xl font-light mt-4 leading-none">Algoritmis</div>

      <!-- Bold Large Text Layout -->
      <div
        class="relative flex flex-wrap gap-10 mt-16 font-light leading-none uppercase whitespace-nowrap text-[189px]"
      >
        <div class="grow shrink w-[643px]">Õppimine</div>
        <div class="grow shrink w-[467px]">mängu</div>
      </div>
      <div
        class="relative flex flex-wrap gap-10 font-light leading-none uppercase whitespace-nowrap text-[189px]"
      >
        <div class="grow shrink w-[504px]">kaudu</div>
        <div class="flex shrink-0 my-auto h-2.5 bg-neutral-700 w-[130px]"></div>
        <div class="grow shrink w-[505px]">areng</div>
      </div>
      <div class="text-[189px] font-light leading-none uppercase">naudinguga</div>

      <!-- Button -->
      <div class="flex justify-center mt-10">
        <router-link to="/center">
          <button
            class="px-5 py-4 text-lg text-white bg-neutral-700 rounded-[30px] w-[520px]"
          >
            Lisateave keskuse kohta
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LearningMethodSection',
}
</script>
