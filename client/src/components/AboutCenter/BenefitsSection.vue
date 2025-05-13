<template>
  <section class="flex flex-col w-full max-w-[1600px] text-neutral-700">
    <!-- Top divider -->
    <div class="w-full h-px bg-neutral-700"></div>

    <!-- Section headers -->
    <div class="px-0">
      <h2 class="mt-5 text-xl">Mängulise õppimise</h2>
      <h3 class="mt-2 text-6xl font-light leading-tight max-md:text-4xl">Eelised</h3>
    </div>

    <!-- Benefits grid -->
    <div class="grid grid-cols-2 gap-x-8 gap-y-6 mt-10 px-20 max-w-[800px] ml-auto mr-10 max-md:grid-cols-1 max-md:mr-5">
      <!-- Benefit 1 -->
      <article>
        <h4 class="text-xl font-medium leading-tight opacity-80">Kaasatus ja motivatsioon:</h4>
        <p class="mt-1.5 text-lg leading-7 opacity-80">lapsed õpivad tõhusalt ja rõõmuga.</p>
      </article>

      <!-- Benefit 2 -->
      <article>
        <h4 class="text-xl font-medium leading-tight opacity-80">Tõhus mälu:</h4>
        <p class="mt-1.5 text-lg leading-7 opacity-80">teadmised kinnistuvad mängulise praktika kaudu.</p>
      </article>

      <!-- Benefit 3 -->
      <article>
        <h4 class="text-xl font-medium leading-tight opacity-80">Sotsiaalsed oskused:</h4>
        <p class="mt-1.5 text-lg leading-7 opacity-80">meeskonnatöö arendab suhtlemisoskust ja võimet koos töötada.</p>
      </article>

      <!-- Benefit 4 -->
      <article>
        <h4 class="text-xl font-medium leading-tight opacity-80">Loov mõtlemine:</h4>
        <p class="mt-1.5 text-lg leading-7 opacity-80">ülesanded stimuleerivad mittestandardsete lahenduste leidmist.</p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BenefitsSection',
}
</script>
