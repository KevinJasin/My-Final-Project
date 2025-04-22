<template>
  <section class="flex flex-col mt-44 w-full max-w-[1600px] text-neutral-700 px-5 md:px-10">
    <!-- Top Divider -->
    <div class="w-full h-px bg-neutral-700"></div>

    <!-- Title -->
    <h2 class="mt-5 text-lg">FAQ</h2>
    <h3 class="mt-4 text-6xl font-light leading-none max-md:text-4xl">
      Vastused vanemate peamistele küsimustele
    </h3>

    <!-- FAQ Content -->
    <div class="flex flex-col mt-12 text-lg max-md:mt-10">
      <div class="flex flex-col w-full">
        <div class="flex flex-col pl-[540px] max-md:pl-0 w-full max-w-full gap-8">
          <!-- Full Answer -->
          <div>
            <div class="font-medium leading-tight opacity-80">
              Kuidas toimuvad tunnid hariduskeskuses?
            </div>
            <div class="mt-1.5 leading-6 opacity-80">
              Kõik tunnid toimuvad kohapeal väikestes gruppides või individuaalselt.
              Loome mugava õhkkonna, mis soodustab tõhusat õppimist ja arengut.
            </div>
          </div>

          <!-- Questions only -->
          <div class="font-medium leading-tight opacity-80">Mida teha, kui laps haigestub?</div>
          <div class="font-medium leading-tight opacity-80">Kas tunniplaani saab lapse järgi kohandada?</div>
          <div class="font-medium leading-tight opacity-80">Kuidas koostatakse õppeprogramm?</div>
          <div class="font-medium leading-tight opacity-80">Kui pikk on tundide kestus?</div>
          <div class="font-medium leading-tight opacity-80">Mitu inimest on grupis?</div>
          <div class="font-medium leading-tight opacity-80">Kas õpetaja saab valida?</div>
          <div class="font-medium leading-tight opacity-80">Kas korraldate eksamiteks ettevalmistavaid tunde?</div>
          <div class="font-medium leading-tight opacity-80">Kas teie keskus sobib lastele, kellel on õpiraskused?</div>
          <div class="font-medium leading-tight opacity-80">Kuidas saab tundidesse registreeruda?</div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FaqSection',
}
</script>
