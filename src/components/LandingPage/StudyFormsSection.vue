<template>
  <section class="flex flex-col mt-44 w-full max-w-[1600px] text-neutral-700 max-md:mt-10 relative px-5 md:px-10">
    <!-- Top Divider -->
    <div class="w-full h-px bg-neutral-700"></div>

    <!-- Section Title -->
    <h2 class="mt-5 text-lg">Õppevormid</h2>

    <!-- Mobile Tree (only visible on mobile) -->
    <div class="md:hidden flex justify-center mt-6">
      <img
        loading="lazy"
        src="/Tree.webp"
        alt="Tree illustration mobile"
        class="object-contain w-[180px]"
      />
    </div>

    <!-- Main Layout -->
    <div class="relative mt-10 grid grid-cols-2 grid-rows-2 max-md:flex max-md:flex-col max-md:gap-10">
      <!-- Cross Dividers (desktop only) -->
      <div class="absolute top-1/2 left-0 w-full h-px bg-neutral-700 max-md:hidden"></div>
      <div class="absolute left-1/2 top-0 h-full w-px bg-neutral-700 transform -translate-x-1/2 max-md:hidden"></div>

      <!-- Tree in center (desktop only) -->
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none hidden md:block">
        <img
          loading="lazy"
          src="/Tree.webp"
          alt="Tree illustration"
          class="object-contain w-[300px]"
        />
      </div>

      <!-- Empty (top-left cell) -->
      <div></div>

      <!-- Top Right Cell -->
      <div class="flex flex-col items-start pl-10 pb-10 max-md:pl-0">
        <h3 class="text-4xl font-light leading-tight max-md:text-3xl">Rühm kuni 3 inimest</h3>
        <p class="mt-4 opacity-80 text-base">Minirühmas saab iga õpilane palju õpetaja tähelepanu.</p>
        <p class="mt-2 opacity-80 text-base">Sobib tagasihoidlikele lastele, aidates neil kergemini õppesse sisse elada.</p>
        <p class="mt-2 opacity-80 text-base">Võimaldab kombineerida individuaalset ja meeskonnatööd.</p>

        <!-- Price Table -->
        <div class="flex gap-6 items-center mt-6 leading-tight max-md:flex-wrap">
          <div class="flex flex-col w-[83px] text-center">
            <div class="opacity-80 text-base">1 tund</div>
            <div class="mt-3 opacity-80 text-base">4 tundi</div>
          </div>
          <div class="flex flex-col flex-1 text-center min-w-[100px]">
            <div class="opacity-80 text-base">60 minutit</div>
            <div class="mt-3 opacity-80 text-base">60 minutit</div>
          </div>
          <div class="flex flex-col w-[43px] text-center">
            <div class="opacity-80 text-base">Hind</div>
            <div class="mt-3 opacity-80 text-base">Hind</div>
          </div>
        </div>
      </div>

      <!-- Bottom Left Cell -->
      <div class="flex flex-col items-start pr-10 pt-10 max-md:pr-0">
        <h3 class="text-4xl font-light leading-tight max-md:text-3xl">Grupis kuni 7 inimest</h3>
        <p class="mt-4 opacity-80 text-base">Arendab suhtlemisoskust, oskust oma mõtteid väljendada ja teisi kuulata.</p>
        <p class="mt-2 opacity-80 text-base">Koostöös õppimine motiveerib, õpilased aitavad ja võistlevad omavahel.</p>
        <p class="mt-2 opacity-80 text-base">Taskukohane hind, säilitades samal ajal kvaliteetse koolituse.</p>

        <!-- Price Table -->
        <div class="flex gap-6 items-center mt-6 leading-tight max-md:flex-wrap">
          <div class="flex flex-col w-[83px] text-center">
            <div class="opacity-80 text-base">1 tund</div>
            <div class="mt-3 opacity-80 text-base">4 tundi</div>
          </div>
          <div class="flex flex-col flex-1 text-center min-w-[100px]">
            <div class="opacity-80 text-base">60 minutit</div>
            <div class="mt-3 opacity-80 text-base">60 minutit</div>
          </div>
          <div class="flex flex-col w-[43px] text-center">
            <div class="opacity-80 text-base">Hind</div>
            <div class="mt-3 opacity-80 text-base">Hind</div>
          </div>
        </div>
      </div>

      <!-- Bottom Right Cell -->
      <div class="flex flex-col items-start pl-10 pt-10 max-md:pl-0">
        <h3 class="text-4xl font-light leading-tight max-md:text-3xl">Individuaaltunnid</h3>
        <p class="mt-4 opacity-80 text-base">Õpetaja kohandab programmi ühe õpilase vajadustega.</p>
        <p class="mt-2 opacity-80 text-base">Võimaldab keskenduda keerulistele teemadele ja teadmistes lüngad kiiresti täita.</p>
        <p class="mt-2 opacity-80 text-base">Sobib õpilastele, kellel on raske õpingutele keskenduda.</p>

        <!-- Price Table Group -->
        <div class="flex flex-wrap gap-10 mt-6 leading-tight">
          <!-- 60 min -->
          <div class="flex gap-6 items-center min-w-[240px] text-center">
            <div class="flex flex-col w-[83px]">
              <div class="opacity-80 text-base">1 tund</div>
              <div class="mt-3 opacity-80 text-base">4 tundi</div>
            </div>
            <div class="flex flex-col flex-1">
              <div class="opacity-80 text-base">60 minutit</div>
              <div class="mt-3 opacity-80 text-base">60 minutit</div>
            </div>
            <div class="flex flex-col w-[43px]">
              <div class="opacity-80 text-base">Hind</div>
              <div class="mt-3 opacity-80 text-base">Hind</div>
            </div>
          </div>

          <!-- 30 min -->
          <div class="flex gap-6 items-center min-w-[240px] text-center">
            <div class="flex flex-col w-[83px]">
              <div class="opacity-80 text-base">1 tund</div>
              <div class="mt-3 opacity-80 text-base">4 tundi</div>
            </div>
            <div class="flex flex-col flex-1">
              <div class="opacity-80 text-base">30 minutit</div>
              <div class="mt-3 opacity-80 text-base">30 minutit</div>
            </div>
            <div class="flex flex-col w-[43px]">
              <div class="opacity-80 text-base">Hind</div>
              <div class="mt-3 opacity-80 text-base">Hind</div>
            </div>
          </div>
        </div>

        <!-- Note -->
        <div class="mt-2 ml-[300px] text-base opacity-60 max-w-[400px] max-md:ml-0">
          30-minutilised tunnid sobivad lastele, kellel on raske pikalt keskenduda või kes ei ole veel õppimise vastu suurt huvi üles näidanud.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StudyFormsSection',
};
</script>
