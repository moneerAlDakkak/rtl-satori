<template>
  <div>
    <h1>RTL Satori template</h1>
    <p>Open Nuxt dev tools to view your Rtl OG Image</p>
  </div>
</template>

<script lang="ts" setup>
const post = ref({
  title: `كيف أعمل في مجال الويب ؟`,
  description: "تعرف في هذا المقال على الوظائف الرئيسية لمبرمجي المواقع",
  cover:
    "https://drive.usercontent.google.com/download?id=1-3LXxEM1-NhDtGi_rhVTeKoxyydSZ8DL",
});

useSeoMeta({
  title: () => post.value.title,
  description: () => post.value.description,
});

defineOgImageComponent("BlogPost", {
  description: post.value.summary,
  title: post.value.title,
  background: post.value.cover,
  url: "blog.moneeraldakkak.com",
  logo: "https://drive.usercontent.google.com/download?id=1-3Y4vIQOKZx1QvvZZ7vdISZxM8FkuWmo",
});
</script>
