<template>
  <main class="overflow-hidden bg-[#eaf0f7] min-h-screen w-full">
    <div class="flex flex-col items-center px-5 md:px-20 pt-6 pb-10 w-full">
      <div class="w-full max-w-[1800px]">
        <NoHeader />

        <!-- Desktop View -->
        <div class="hidden md:flex relative justify-center items-center mt-20 h-[700px]">
          <!-- Left 404 -->
          <div class="absolute left-0 top-0 text-[400px] text-white font-light leading-none select-none">
            404
          </div>

          <!-- Right 404 -->
          <div class="absolute right-0 top-0 text-[400px] text-white font-light leading-none select-none">
            404
          </div>

          <!-- Center Content -->
          <div class="flex flex-col items-center z-10 relative">
            <img src="/Tree.webp" alt="Tree" class="w-[180px] mb-6" />
            <h1 class="text-3xl text-black font-semibold mb-6">Lehte ei leitud</h1>
            <a
              href="/"
              class="bg-neutral-700 text-white text-lg px-12 py-4 rounded-full mb-6 z-20 relative"
            >
              Mine tagasi avalehele
            </a>
            <!-- Bottom 404 -->
            <div class="text-[400px] text-white font-light leading-none select-none">
              404
            </div>
          </div>
        </div>

        <!-- Mobile View -->
        <div class="md:hidden">
          <ErrorContent />
        </div>
      </div>
    </div>
  </main>
</template>



<script>
import NoHeader from './NoHeader.vue'
import ErrorContent from './ErrorContent.vue'

export default {
  name: 'NotFoundPage',
  components: {
    NoHeader,
    ErrorContent
  }
}
</script>
