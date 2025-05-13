<template>
  <div class="flex flex-col items-center bg-white min-h-screen w-full">
    <AppHeader />

    <main class="w-full max-w-[1600px] flex flex-col items-center">
      <!-- Ensuring Proper Vertical Alignment -->
      <NumbersSection class="w-full flex justify-center" />
      <TeachersSection class="w-full flex justify-center" />
      <CoursesSection class="w-full flex justify-center"/>
      <StudyFormsSection class="w-full flex justify-center" />
      <LearningMethodSection class="w-full flex justify-center" />
      <FaqSection class="w-full flex justify-center" />
      <ContactForm class="w-full flex justify-center" />
      <AppFooter />
    </main>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import NumbersSection from './NumbersSection.vue'
import TeachersSection from './TeachersSection.vue'
import CoursesSection from './CoursesSection.vue'
import StudyFormsSection from './StudyFormsSection.vue'
import LearningMethodSection from './LearningMethodSection.vue'
import FaqSection from './FaqSection.vue'
import ContactForm from './ContactForm.vue'
import AppFooter from './AppFooter.vue'

export default {
  name: 'LandingPage',
  components: {
    AppHeader,
    NumbersSection,
    TeachersSection,
    CoursesSection,
    StudyFormsSection,
    LearningMethodSection,
    FaqSection,
    ContactForm,
    AppFooter,
  },
}
</script>
