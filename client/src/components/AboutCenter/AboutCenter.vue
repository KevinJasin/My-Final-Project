<template>
  <HeaderTwo />
  <main class="w-full max-w-[1600px] flex flex-col items-center">
    <LearningMethodSection class="w-full flex justify-center" />
    <BenefitsSection  class="w-full flex justify-center"/>
    <MethodsSection class="w-full flex justify-center" />
    <CallToActionSection  class="w-full flex justify-center"/>
    <FooterTwo />
  </main>
</template>

<script>
import HeaderTwo from './HeaderTwo.vue'
import LearningMethodSection from './LearningMethodSection.vue'
import BenefitsSection from './BenefitsSection.vue'
import MethodsSection from './MethodsSection.vue'
import CallToActionSection from './CallToActionSection.vue'
import FooterTwo from './FooterTwo.vue'

export default {
  name: 'AboutCenter',
  components: {
    HeaderTwo,
    LearningMethodSection,
    BenefitsSection,
    MethodsSection,
    CallToActionSection,
    FooterTwo,
  },
  mounted() {
    // Scroll to the top of the page when the AboutCenter component is loaded
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}
</script>
