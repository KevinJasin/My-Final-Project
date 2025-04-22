<template>
  <section
    class="flex flex-col mt-20 w-full max-w-[1600px] text-neutral-700 max-md:mt-10 max-md:max-w-full"
  >
    <!-- Top Divider Line -->
    <div class="w-full h-px bg-neutral-700"></div>

    <!-- Section Title -->
    <h2 class="mt-5 text-lg px-0">Õppemeetodist</h2>

    <!-- Content Container -->
    <div class="flex flex-col px-10 py-10 relative">
      <!-- Text Block (Right-Aligned) -->
      <div class="flex justify-end w-full">
        <div class="w-[65%] max-md:w-full max-md:text-center">
          <p class="text-6xl font-light leading-tight tracking-tight max-md:text-3xl">
            Kasutame mängulisi meetodeid, et<br />
            motiveerida kooliõpilasi, arendada<br />
            nende mõtlemist ja kaasata isegi kõige<br />
            rahutumaid lapsi.
          </p>
        </div>
      </div>

      <!-- Image Block (Left-Aligned) -->
      <div class="flex justify-start mt-6">
        <img
          src="/BiggerBacteria.png"
          alt="Learning method illustration"
          class="object-contain w-[800px] max-md:w-[350px]"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LearningMethodSection',
};
</script>
