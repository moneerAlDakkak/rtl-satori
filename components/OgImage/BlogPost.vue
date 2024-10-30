<template>
  <div
    style="
      position: relative;
      background: #222;
      color: white;
      font-family: 'Baysan', 'Cairo';
    "
  >
    <img
      v-if="background"
      :src="background"
      style="width: 1200px; position: absolute; inset: 0"
    />
    <div
      class="branding"
      style="
        position: absolute;
        top: 0;
        left: 0;
        height: 600px;
        width: 1200px;
        padding: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      "
    >
      <img v-if="logo" :src="logo" style="width: 60px; height: 60px" />
      <span v-if="url" style="font-size: 1.1em">{{ url }}</span>
    </div>
    <div
      style="
        height: 600px;
        width: 1200px;
        padding: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        gap: 0.5rem;
      "
    >
      <h1
        v-for="line in reverseAndDivide(title)"
        :style="{
          fontSize: '48px',
          fontWeight: 'bold',
          margin: 0,
          whiteSpace: 'nowrap',
        }"
      >
        {{ line }}
      </h1>

      <hr />
      <p
        v-for="line in reverseAndDivide(description)"
        :style="{
          fontSize: '28px',
          opacity: 0.8,
          margin: 0,
          whiteSpace: 'nowrap',
        }"
      >
        {{ line }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  background?: string;
  logo?: string;
  url?: string;
}>();

function reverseAndDivide(text: string) {
  const lines = divideLines(text);
  return lines.map((line) => reverseText(line));
}

function reverseText(text: string) {
  // 小 : means little in Chinese
  // Can be replaced with any character that's not defined in your font
  return text.split(" ").reverse().join("小");
}

function divideLines(text: string) {
  return text.split("\n");
}
</script>
