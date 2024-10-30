# rtl-satori
A workaround to make RTL OG Images with Satori (An automated way to design og images)

![preview](https://drive.usercontent.google.com/download?id=1jsvBXBEgyf5QD_od_YzwnLmAXiwUU_ha)

## Context
Satori is an automated tool to make OG images for good looking images when you share a link of your post on social media.
That's not the case if your post happens to be in a RTL language though, because Satori doesn't support RTL.
You can read more about this problem [here](https://github.com/vercel/satori/issues/74).

## What's this repo about?
I tried to get a good looking RTL images from Satori with some Html, Css, Js tricks. and it actually works with some limitations.
This here is a Nuxt app that uses [NuxtSEO](https://nuxtseo.com/docs/og-image/getting-started/introduction) which uses Satori to render the OG images. 
(The template is in components/OgImage/BlogPost.vue)

## What tricks did I apply?
- for text direction: Replacing white spaces in the strings with an invisible character
- for inverted text wrapping: Dividing the text into lines when you insert an (Enter/new line character) in your text

## Limitations
- Text align is still a problem.
- Your title should consist of one line or multiple lines spereated with a new line.

## Can I use this template as it is?
Sure, it gets you good rtl text but bad text align.
I wouldn't use it in production but I believe we can get it to work (So please contribute if you're intrested).
