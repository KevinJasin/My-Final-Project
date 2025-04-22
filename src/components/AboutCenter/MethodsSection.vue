<template>
  <section class="flex flex-col w-full max-w-[1600px] text-neutral-700 relative px-5 md:px-0">
    <!-- Top divider -->
    <div class="w-full h-px bg-neutral-700"></div>

    <!-- Content -->
    <div class="flex justify-between py-10 gap-10 max-md:flex-col">
      <!-- Left: Text -->
      <div class="flex flex-col w-1/2 max-md:w-full">
        <h2 class="mt-3 text-xl">Mängulise õppimise</h2>
        <h3 class="mt-2 text-6xl font-light leading-tight max-md:text-4xl">Meetodid</h3>

        <!-- Image shown first on mobile -->
        <div class="md:hidden mt-10 flex justify-center">
          <img
            src="/CircleTree.png"
            alt="Learning methods illustration"
            class="w-full max-w-[400px] aspect-square"
          />
        </div>

        <!-- Method list -->
        <ul class="mt-16 space-y-6 text-lg max-md:mt-10">
          <li class="text-xl max-md:text-lg">Gamifikatsioon punktide, tasemete ja auhindadega.</li>
          <li class="text-xl max-md:text-lg">Rollimängud uute teemade õppimiseks.</li>
          <li class="text-xl max-md:text-lg">Kvestid ja mõistatused, mis arendavad loogikat.</li>
          <li class="text-xl max-md:text-lg">Harivad lauamängud.</li>
        </ul>
      </div>

      <!-- Right: Image (desktop only) -->
      <div class="hidden md:flex w-1/2 justify-end">
        <img
          src="/CircleTree.png"
          alt="Learning methods illustration"
          class="w-full max-w-[700px] aspect-square"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MethodsSection',
}
</script>
