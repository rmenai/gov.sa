<script setup lang="ts">
import { Icon } from "@iconify/vue";
useHead({
  title: "Unknown",
});
</script>

<template>
  <NuxtLayout name="folder">
    <div class="flex h-screen w-[535px] items-center">
      <NuxtLink class="hover:-left-29 absolute -left-28 transition-all" to="/">
        <Icon icon="mdi:chevron-left" class="text-8xl" width="40px"></Icon>
      </NuxtLink>
      <TextBox :animation-delay="-1000">
        <template #start>
          <Icon icon="mdi:trash-can-outline" class="ml-2 text-2xl" />
          <p class="py-2 text-2xl">Poubelle & Fichiers inconnus</p>
        </template>
        <template #end>
          <p class="pr-2 text-xl text-cyan-300">end. program</p>
        </template>
        <template #body>
          <div class="flex flex-wrap gap-4 p-4 pt-12">
            <FileBox resource="/api/cat" title="Milo et ses amis" />
            <FileBox
              icon="mdi:file-music-outline"
              resource="/audio/interview.m4a"
              title="Entretien perdu"
            />
            <FileBox
              resource="/images/photo_trap-n21.png"
              title="photo_trap.n21"
            />
            <FileBox
              icon="mdi:file-document-outline"
              resource="/text/jeremy.txt"
              title="Cher Martin"
            />
            <FileBox
              icon="mdi:file-document-outline"
              resource="/text/passcodes.txt"
              title="Petite liste de mots de passe"
            />
            <div
              class="text-header-md flex h-64 w-64 items-center justify-center bg-gradient-to-br from-cyan-200 to-transparent bg-clip-text pb-12 text-6xl text-transparent"
            >
              ...
            </div>
          </div>
        </template>
      </TextBox>
    </div>
  </NuxtLayout>
</template>
