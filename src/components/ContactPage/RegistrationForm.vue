<template>
  <div class="w-full h-px bg-neutral-700"></div>
  <section id="register" class="px-5 md:px-0">
    <h2 class="mt-5 text-lg text-neutral-700">Valmis õppima?</h2>
    <h3 class="mt-4 text-6xl font-light leading-none text-neutral-700 max-md:text-4xl">
      Registreeru tunnile
    </h3>

    <div class="flex justify-center">
      <form
        @submit.prevent="submitForm"
        class="self-center mt-16 max-w-full text-lg w-[790px] max-md:mt-10 max-md:text-base"
      >
        <div class="w-full text-neutral-700 max-md:max-w-full">

          <!-- Parent Name -->
          <div class="flex items-center px-5 py-3 mt-4 border border-neutral-700 rounded-[30px] max-md:py-2 max-md:px-4 max-md:text-sm">
            <input v-model="form.parentName" type="text" placeholder="Vanema nimi" class="w-full bg-transparent outline-none placeholder:text-neutral-500" required />
          </div>

          <!-- Parent Phone -->
          <div class="flex items-center px-5 py-3 mt-4 border border-neutral-700 rounded-[30px] max-md:py-2 max-md:px-4 max-md:text-sm">
            <input v-model="form.parentPhone" type="tel" placeholder="Vanema telefoninumber" class="w-full bg-transparent outline-none placeholder:text-neutral-500" required />
          </div>

          <!-- Student Name -->
          <div class="flex items-center px-5 py-3 mt-4 border border-neutral-700 rounded-[30px] max-md:py-2 max-md:px-4 max-md:text-sm">
            <input v-model="form.studentName" type="text" placeholder="Õpilase nimi" class="w-full bg-transparent outline-none placeholder:text-neutral-500" required />
          </div>

          <!-- Student Class -->
          <div class="flex items-center px-5 py-3 mt-4 border border-neutral-700 rounded-[30px] max-md:py-2 max-md:px-4 max-md:text-sm">
            <input v-model="form.studentClass" type="text" placeholder="Õpilase klass" class="w-full bg-transparent outline-none placeholder:text-neutral-500" required />
          </div>

          <!-- Subject Selection -->
          <fieldset class="mt-4">
            <div class="flex flex-wrap gap-2.5 max-md:text-sm">
              <label
                class="flex-1 px-5 py-3 border border-neutral-700 rounded-[30px] text-center cursor-pointer max-md:py-2"
                :class="form.subject === 'Matemaatika' ? 'bg-indigo-50' : ''"
              >
                <input type="radio" v-model="form.subject" value="Matemaatika" class="sr-only" />
                Matemaatika
              </label>
              <label
                class="flex-1 px-5 py-3 border border-neutral-700 rounded-[30px] text-center cursor-pointer max-md:py-2"
                :class="form.subject === 'Eesti keel' ? 'bg-indigo-50' : ''"
              >
                <input type="radio" v-model="form.subject" value="Eesti keel" class="sr-only" />
                Eesti keel
              </label>
            </div>
          </fieldset>

          <!-- Level Selection -->
          <fieldset class="mt-4">
            <div class="flex flex-wrap gap-2.5 max-md:text-sm">
              <label
                v-for="level in ['Eksami ettevalmistus', 'Edasijõudnute tase', 'Puudujääkide täitmine']"
                :key="level"
                class="flex-1 px-5 py-3 border border-neutral-700 rounded-[30px] text-center cursor-pointer max-md:py-2"
                :class="form.level === level ? 'bg-indigo-50' : ''"
              >
                <input type="radio" v-model="form.level" :value="level" class="sr-only" />
                {{ level }}
              </label>
            </div>
          </fieldset>

          <!-- Group Size Selection -->
          <fieldset class="mt-4">
            <div class="flex flex-wrap gap-2.5 max-md:text-sm">
              <label
                v-for="group in ['Grupp kuni 3 inimest', 'Grupp kuni 7 inimest', 'Individuaalne']"
                :key="group"
                class="flex-1 px-5 py-3 border border-neutral-700 rounded-[30px] text-center cursor-pointer max-md:py-2 whitespace-nowrap"
                :class="form.groupSize === group ? 'bg-indigo-50' : ''"
              >
                <input type="radio" v-model="form.groupSize" :value="group" class="sr-only" />
                {{ group }}
              </label>
            </div>
          </fieldset>

          <!-- Question -->
          <div class="flex items-center px-5 py-3 mt-4 border border-neutral-700 rounded-[30px] max-md:py-2 max-md:text-sm">
            <textarea
              v-model="form.question"
              placeholder="Kirjutage, kui teil on küsimusi"
              class="w-full bg-transparent outline-none resize-none placeholder:text-neutral-500"
              rows="2"
            ></textarea>
          </div>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="px-5 py-4 mt-10 max-w-full text-white bg-neutral-700 rounded-[30px] w-full md:w-[520px] text-center max-md:text-sm"
        >
          Registreeru
        </button>
      </form>
    </div>

    <!-- Popup -->
    <div
      v-if="showPopup"
      class="fixed inset-0 flex items-center justify-center z-50"
      @click="showPopup = false"
    >
      <img src="/Pop-up2.png" alt="Popup Image" class="max-w-full max-h-[80vh] cursor-pointer" />
    </div>
  </section>
</template>




<script>
import axios from "axios";

export default {
  name: "RegistrationForm",
  data() {
    return {
      form: {
        parentName: "",
        parentPhone: "",
        studentName: "",
        studentClass: "",
        subject: "",
        level: "",
        groupSize: "",
        question: "",
      },
      showPopup: false, // 👈 new
    };
  },
  methods: {
    async submitForm() {
      try {
        await axios.post("http://localhost:3001/save-excel", this.form);

        // Show the success popup
        this.showPopup = true;

        // Optional: Auto-close after 4 seconds
        setTimeout(() => {
          this.showPopup = false;
        }, 4000);

        // Reset form
        this.form = {
          parentName: "",
          parentPhone: "",
          studentName: "",
          studentClass: "",
          subject: "",
          level: "",
          groupSize: "",
          question: "",
        };
      } catch (error) {
        console.error("Registration failed", error);
      }
    },
  },
};
</script>

