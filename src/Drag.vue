<template>
  <div class="simple-drag" draggable="true" :style="style" v-on="events">
    {{ text }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SimpleDrag',
  props: {
    text: {
      type: String,
      default: '文本',
    },
  },
  setup() {
    const style = ref({
      left: '0px',
      top: '0px',
    })
    const events = {
      dragstart: (e: DragEvent) => {
        style.value.left = e.clientX + 'px'
        style.value.top = e.clientY + 'px'
      },
      drag: (e: DragEvent) => {
        style.value.left = e.clientX + 'px'
        style.value.top = e.clientY + 'px'
      },
      dragend: (e: DragEvent) => {
        style.value.left = e.clientX + 'px'
        style.value.top = e.clientY + 'px'
      },
    }

    return {
      events,
      style,
    }
  },
})
</script>
<style scoped>
.simple-drag {
  padding: 5px 15px;
  border-radius: 3px;
  border: 1px solid #ccc;
  position: absolute;
  cursor: move;
  user-select: none;
}
</style>
