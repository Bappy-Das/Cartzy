<template>
  <h1 :style="headingStyle">
    <slot />
  </h1>
</template>

<script setup>
const props = defineProps({
  color: { type: String, default: "#000" },
  device: { type: String, default: "md" }, // sm, md, lg
});

const fontSizes = {
  sm: "20px",
  md: "30px",
  lg: "40px",
};

const headingStyle = {
  color: props.color,
  fontSize: fontSizes[props.device] || fontSizes.md,
  fontWeight: "bold",
  margin: 0,
};
</script>
