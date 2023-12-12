<template>
  <div class="p-2">
    <sleeping-cat/>
  </div>
</template>

<script>
import SleepingCat from '@/components/animation/SleepingCat.vue';

export default {
  name: 'MainPage',
  components: {
    SleepingCat,
  },
};
</script>
