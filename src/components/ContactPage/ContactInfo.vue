<template>
  <section class="flex flex-col items-start w-full max-md:max-w-full px-5 md:px-0">
    <div
      class="grid grid-cols-[auto_1fr] gap-x-32 gap-y-5 text-left w-full mx-auto max-md:grid-cols-1 max-md:gap-y-8"
    >
      <!-- Address -->
      <h2 class="text-lg">Aadress</h2>
      <p class="text-6xl font-light leading-none pl-32 max-md:pl-0 max-md:text-2xl">
        Mustamäe tee 4 – A134, Tallinn, 10616
      </p>

      <!-- Email -->
      <h2 class="text-lg">E-post</h2>
      <a
        href="mailto:algoritm.keskus@gmail.com"
        class="text-6xl font-light leading-none pl-32 max-md:pl-0 max-md:text-2xl text-black hover:underline"
      >
        algoritm.keskus@gmail.com
      </a>

      <!-- Messengers -->
      <h2 class="text-lg">Messengerid</h2>
      <div class="flex gap-10 text-6xl font-light leading-none pl-32 max-md:pl-0 max-md:text-2xl">
        <a href="#" class="hover:underline text-black">Telegram</a>
        <a href="#" class="hover:underline text-black">WhatsApp</a>
      </div>

      <!-- Phone -->
      <h2 class="text-lg">Telefon</h2>
      <a
        href="tel:+3725547971"
        class="text-6xl font-light leading-none pl-32 max-md:pl-0 max-md:text-2xl text-black"
      >
        +3725547971
      </a>

      <!-- Company Info -->
      <h2 class="text-lg">Algoritm OÜ</h2>
      <div
        class="w-full max-w-[1200px] text-lg font-light pl-32 max-md:pl-0 max-md:text-base"
      >
        <div class="flex gap-32 max-md:flex-col max-md:gap-4">
          <div>
            <h3 class="font-medium opacity-80">Registrikood</h3>
            <p class="mt-1 opacity-80">16572141</p>
          </div>
          <div>
            <h3 class="font-medium opacity-80">Juriidiline aadress</h3>
            <p class="mt-1 opacity-80">Sõle 33, Tallinn</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactInfo',
}
</script>
