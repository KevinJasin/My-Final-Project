<template>
  <footer class="flex flex-col pb-8 mt-44 w-full text-neutral-700 max-md:mt-10 max-md:max-w-full">
    <div class="flex shrink-0 h-px bg-neutral-700 max-md:max-w-full"></div>

    <!-- Footer Content -->
    <div class="flex justify-between items-center w-full px-30 mt-5 max-md:flex-col max-md:px-5 max-md:text-center max-md:gap-6">
      <!-- Logo -->
      <div class="flex-1 flex justify-start max-md:justify-center">
        <img
          loading="lazy"
          src="/Logo.webp"
          alt="Company logo"
          class="object-contain w-[141px] cursor-pointer"
          @click="scrollToHeader"
        />
      </div>

      <!-- Address -->
      <div class="flex-1 text-center text-lg font-light">
        Mustamäe tee 4 – A134, Tallinn
      </div>

      <!-- Social Links -->
      <div class="flex-1 flex justify-end gap-10 text-lg font-light max-md:justify-center">
        <a href="#" class="hover:underline transition-all text-black">WhatsApp</a>
        <a href="#" class="hover:underline transition-all text-black">Telegram</a>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  name: 'FooterTwo',
  methods: {
    scrollToHeader() {
      this.$router.push('/').then(() => {
        setTimeout(() => {
          const header = document.querySelector('header'); // Find any header
          if (header) {
            header.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); // Small delay to wait for the page load
      });
    }
  }
}
</script>
