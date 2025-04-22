<template>
  <section class="flex flex-col items-center w-full text-neutral-700 bg-[#eaf0f7] px-5 pb-20">
    <!-- Top 404s -->
    <div class="flex justify-between w-full text-[100px] font-light tracking-tighter leading-none max-w-[360px] text-white">
      <span>404</span>
      <span>404</span>
    </div>

    <!-- Tree image -->
    <img src="/Tree.png" alt="Tree" class="w-[160px] my-4" />

    <!-- Bottom 404 -->
    <div class="text-[100px] font-light text-white leading-none mb-2">404</div>

    <!-- Message -->
    <h1 class="text-lg text-center text-black font-medium">Lehte ei leitud</h1>

    <!-- Button -->
    <a
      href="/"
      class="mt-6 bg-neutral-700 text-white text-lg px-8 py-4 rounded-full text-center"
    >
      Mine tagasi avalehele
    </a>
  </section>
</template>

<script>
export default {
  name: 'ErrorContent',
}
</script>
