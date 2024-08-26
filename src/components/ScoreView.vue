<template>
  <div class="row">
    <h2 class="cover-heading text-center"></h2>
    <h3 class="text-center">{{ current.name }}</h3>
    <h3 class="text-center" style="color: #449d44">
      <small>分數</small> {{ current.score }} <small>分</small>
    </h3>
  </div>
</template>

<script lang="ts">
import type { IStudents } from '@/stores/utils'
import { defineComponent, type PropType } from 'vue'
export default defineComponent({
  name: 'ScoreView',
  props: {
    current: {
      type: Object as PropType<IStudents>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.row {
  display: grid;
}
</style>
