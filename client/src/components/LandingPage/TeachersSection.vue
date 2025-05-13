<template>
  <section class="flex flex-col items-center w-full max-w-[1600px] text-neutral-700 mt-44 max-md:mt-10">
    <!-- Top Divider -->
    <div class="w-full h-px bg-neutral-700"></div>

    <!-- Section Title -->
    <h2 class="text-lg mt-10 w-full max-w-[1600px] px-5">Õpetajad</h2>

    <!-- Teacher Box -->
    <div class="flex justify-center w-full mt-10 px-5">
      <div
        class="relative flex w-full max-w-[1040px] p-10 border border-neutral-700 bg-transparent flex-col md:flex-row md:h-[480px]"
        style="clip-path: polygon(5% 0, 95% 0, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0 95%, 0 5%);"
      >

        <!-- Left: Text -->
        <div class="flex-1 flex flex-col justify-start md:justify-center md:items-start items-center text-center md:text-left">
          <h3 class="text-6xl font-light leading-none max-md:text-4xl">Diana</h3>
          <p class="mt-4 text-lg leading-tight opacity-80">
            Keskuse asutaja, matemaatika- ja eesti keele õpetaja
          </p>
        </div>

        <!-- Right: Circle Image -->
        <div class="flex justify-center items-center mt-10 md:mt-0 md:ml-10">
          <div class="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden">
            <img
              src="/Teacher.webp"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeachersSection',
}
</script>
