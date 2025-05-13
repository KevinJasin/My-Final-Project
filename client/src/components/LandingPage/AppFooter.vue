<template>
  <footer class="flex flex-col items-center pb-8 mt-44 w-full text-neutral-700 max-md:mt-10 max-md:max-w-full">
    <!-- Divider Line -->
    <div class="w-full h-px bg-neutral-700"></div>

    <!-- Footer Content (Centered) -->
    <div class="flex justify-between items-center w-full px-30 mt-5 max-md:flex-col max-md:px-5 max-md:text-center">
      <!-- Logo on Left -->
      <div class="flex-1 flex justify-start max-md:justify-center">
        <a href="#" @click.prevent="scrollToHeader">
        <img
          loading="lazy"
          src="/Logo.webp"
          alt="Company logo"
          class="object-contain w-[140px] cursor-pointer"
        />
        </a>
      </div>

      <!-- Address in Center -->
      <div class="flex-1 text-center text-lg font-light">
        Mustamäe tee 4 – A134, Tallinn
      </div>

      <!-- Social Links on Right -->
      <div class="flex-1 flex justify-end gap-10 text-lg font-light max-md:justify-center">
        <a href="#" class="hover:underline transition-all text-black">WhatsApp</a>
        <a href="#" class="hover:underline transition-all text-black">Telegram</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  methods: {
    scrollToHeader() {
      const header = document.querySelector('header');
      if (header) {
        header.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>
