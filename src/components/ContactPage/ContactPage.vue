<template>
  <PageHeader class="w-full flex justify-center" @scroll-to-register="scrollToRegister" />
  <main class="w-full max-w-[1600px] flex flex-col items-center">
    <section
      class="flex flex-col self-center mt-20 w-full max-w-[1600px] max-md:mt-10 max-md:max-w-full"
    >
      <ContactInfo class="w-full flex justify-center" />
      <hr class="mt-44 h-px bg-neutral-700 max-md:mt-10 max-md:max-w-full" />
      <RegistrationForm class="w-full flex justify-center" id="register"  />
    </section>
    <PageFooter class="w-full flex justify-center" />
  </main>
</template>

<script>
import { nextTick } from "vue";
import PageHeader from "./PageHeader.vue";
import ContactInfo from "./ContactInfo.vue";
import RegistrationForm from "./RegistrationForm.vue";
import PageFooter from "./PageFooter.vue";

export default {
  name: "ContactPage",
  components: {
    PageHeader,
    ContactInfo,
    RegistrationForm,
    PageFooter,
  },
  methods: {
    async scrollToRegister() {
      console.log("✅ scrollToRegister triggered!");

      // ✅ Wait for Vue to render before scrolling
      await nextTick();

      // ✅ Scroll using plain JavaScript (Vue refs were returning #text nodes)
      const registerSection = document.getElementById("register");
      if (registerSection) {
        console.log("✅ Scrolling to register section...");
        registerSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        console.error("❌ Registration section not found!");
      }
    },
  },
};
</script>
