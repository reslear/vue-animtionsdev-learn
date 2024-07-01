<script lang="ts" setup>
import AnimYellowBox from './examples/1.anim-yellow-box.vue'
import ShowSecond from './examples/2.showSecond.vue'
</script>

<template>
  <div class="flex flex-col gap-1">
    <DemoBox>
      <AnimYellowBox />
    </DemoBox>

    <DemoBox>
      <ShowSecond />
    </DemoBox>
  </div>
</template>
