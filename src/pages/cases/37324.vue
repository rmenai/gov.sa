<script setup lang="ts">
import { Icon } from "@iconify/vue";
useHead({
  title: "Case 37324",
});
</script>

<template>
  <NuxtLayout name="folder">
    <div class="w-[1200px] pt-32">
      <NuxtLink class="hover:-left-29 absolute -left-28 transition-all" to="/">
        <Icon icon="mdi:chevron-left" class="text-8xl" width="40px"></Icon>
      </NuxtLink>
      <TextBox :animation-delay="-1000">
        <template #start>
          <p class="ml-2 py-2 text-2xl">Addaire 37324</p>
          <p class="ml-2 py-2 text-2xl text-cyan-300">| Albert Einstein</p>
        </template>
        <template #end>
          <p class="pr-2 text-xl text-cyan-300">end. program</p>
        </template>
        <template #body>
          <div class="text-header-md flex w-full flex-col p-16 capitalize">
            <header class="flex flex-col items-center px-32 text-center">
              <p class="text-6xl leading-snug text-cyan-200">
                L'un des plus grands Physiciens vient de mourir. Qu'a-t-il
                laissé derrière lui ?
              </p>
              <div class="normal-case text-white/95">
                par <span class="text-white">Detective Ziad</span>,
                <a href="#">suspects.vercel.app</a>
                <br />
                <Icon icon="mdi:clock" class="-mb-[2px]" />
                Février 25, 2016, 2:00 PM
              </div>
            </header>
            <!--            <img src="/images/map.png" alt="World map in white color" />-->
            <hr class="border-1 mt-8 mb-16 border-dashed border-cyan-300" />
            <div class="flex">
              <div class="text-2xl normal-case text-cyan-200">
                <div>
                  <p class="pb-4 text-5xl font-black">Que ç'est-il passer ?</p>
                  <p class="font-light text-white"></p>
                </div>
              </div>
              <div class="mr-0 ml-auto">
                <IdentityCard
                  name="Albert Einstein"
                  photo="/images/albert.png"
                  date="Mars 13, 2005"
                  birthdate="Jan 12, 1972"
                  deathdate="Février 25, 2016"
                  :age="44"
                  gender="Homme"
                  job="Physicien théoricien"
                />
              </div>
            </div>
          </div>
        </template>
      </TextBox>
    </div>
  </NuxtLayout>
</template>
