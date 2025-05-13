<template>
  <section
    class="flex flex-col mt-20 w-full max-w-[1600px] text-neutral-700 max-md:mt-10 max-md:max-w-full"
  >
    <div class="flex shrink-0 h-px bg-neutral-700 max-md:max-w-full"></div>
    <div class="flex flex-wrap gap-5 mt-5 max-md:max-w-full">
      <!-- LEFT COLUMN -->
      <div class="flex flex-col items-start text-lg max-md:max-w-full max-md:w-full">
        <div>Oluline teave</div>
        <h2 class="mt-4 text-6xl font-light leading-none max-md:text-4xl">Numbrites</h2>
        <p class="mt-10 leading-6 max-md:mt-6 max-md:max-w-full">
          Me arendame koolilapsi armastuse ja tähelepanuga ning oleme uhked iga õpilase saavutuste üle.
        </p>
        <div class="flex shrink-0 self-stretch mt-5 h-px bg-neutral-700 max-md:max-w-full"></div>
        <div
          class="mt-10 font-light leading-none uppercase text-[189px] max-md:mt-6 max-md:text-4xl"
        >
          2022
        </div>
        <p class="mt-6 leading-tight max-md:mt-4 max-md:max-w-full">
          Aasta, mil korraldasime esimesed matemaatikatunnid
        </p>
        <div class="flex shrink-0 self-stretch mt-5 h-px bg-neutral-700 max-md:max-w-full"></div>
      </div>

      <!-- SEPARATOR -->
      <div class="flex shrink-0 w-px bg-neutral-700 h-auto"></div>

      <!-- RIGHT COLUMN -->
      <div class="flex flex-col items-start mt-6 font-light leading-none text-[189px] max-md:text-4xl max-md:w-full">
        <div class="uppercase">100%</div>
        <p class="mt-4 text-lg leading-tight max-md:mt-2">
          Õpetajatest on erialase kõrgharidusega
        </p>
        <div class="flex shrink-0 self-stretch mt-3 h-px bg-neutral-700"></div>

        <div class="mt-8 uppercase">98%</div>
        <p class="mt-4 text-lg leading-tight max-md:mt-2">
          Positiivseid arvamusi vanematelt ja õpilastelt
        </p>
        <div class="flex shrink-0 self-stretch mt-3 h-px bg-neutral-700"></div>

        <div class="mt-8 uppercase">95%</div>
        <p class="mt-4 text-lg leading-tight max-md:mt-2">
          Õpilastest sooritab eksamid edukalt
        </p>
      </div>
    </div>
    <div class="flex shrink-0 self-end mt-6 max-w-full h-px bg-neutral-700 w-[780px]"></div>
  </section>
</template>

<script>
export default {
  name: 'NumbersSection',
}
</script>
