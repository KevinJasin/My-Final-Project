<template>
  <section class="flex flex-col mt-44 w-full max-w-[1600px] text-neutral-700 px-5 md:px-10 max-md:mt-10">
    <!-- Top Divider -->
    <div class="w-full h-px bg-neutral-700"></div>

    <!-- Section Titles -->
    <p class="mt-5 text-base max-md:text-sm">
      Kas soovite küsida midagi keskuses toimuva õppe kohta?
    </p>
    <h2 class="mt-4 text-6xl font-light leading-none max-md:text-4xl">
      Täitke vorm
    </h2>

    <!-- Form Wrapper -->
    <div class="flex flex-col self-center mt-16 ml-32 max-w-full w-[790px] max-md:ml-0 max-md:mt-10">
      <form @submit.prevent="sendEmail" class="flex flex-col w-full gap-2.5">
        <!-- Name -->
        <div class="flex items-center px-5 py-4 border border-neutral-700 rounded-[30px]">
          <input
            v-model="form.name"
            type="text"
            placeholder="Vanema nimi"
            class="w-full bg-transparent outline-none opacity-50"
            required
          />
        </div>

        <!-- Phone -->
        <div class="flex items-center px-5 py-4 border border-neutral-700 rounded-[30px]">
          <input
            v-model="form.phone"
            type="tel"
            placeholder="Vanema telefoninumber"
            class="w-full bg-transparent outline-none opacity-50"
            required
          />
        </div>

        <!-- Message -->
        <div class="flex items-center px-5 py-4 border border-neutral-700 rounded-[30px]">
          <textarea
            v-model="form.message"
            placeholder="Saada küsimus"
            rows="3"
            class="w-full bg-transparent outline-none opacity-50 resize-none"
            required
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="self-stretch px-5 py-4 mt-10 max-w-full text-white bg-neutral-700 rounded-[30px] w-[520px]"
        >
          Esitage küsimus
        </button>
      </form>
    </div>

    <!-- Image Popup -->
    <div
      v-if="showPopup"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      @click="showPopup = false"
    >
      <img
        src="/Pop-up1.webp"
        alt="Popup Image"
        class="max-w-full max-h-[80vh] cursor-pointer"
      />
    </div>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        phone: '',
        message: '',
      },
      showPopup: false,
    };
  },
  methods: {
    sendEmail() {
      const SERVICE_ID = 'service_yzmhzzh';
      const TEMPLATE_ID = 'template_6x5u1b8';
      const PUBLIC_KEY = 'rnNNY77LR2SHK4Zrt';

      emailjs
        .send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            user_name: this.form.name,
            user_phone: this.form.phone,
            user_message: this.form.message,
          },
          PUBLIC_KEY
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            this.form.name = '';
            this.form.phone = '';
            this.form.message = '';
            this.showPopup = true;
          },
          (error) => {
            console.log('FAILED...', error);
            alert('Failed to send email. Please try again.');
          }
        );
    },
  },
};
</script>
