<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <NuxtLayout name="folder">
    <div class="w-[1200px] pt-32">
      <NuxtLink class="hover:-left-29 absolute -left-28 transition-all" to="/">
        <Icon icon="mdi:chevron-left" class="text-8xl" width="40px"></Icon>
      </NuxtLink>
      <TextBox :animation-delay="-1000">
        <template #start>
          <p class="ml-2 py-2 text-2xl">Affaire 37325</p>
          <p class="ml-2 py-2 text-2xl text-cyan-300">| Ismail Masmoudi</p>
        </template>
        <template #end>
          <p class="pr-2 text-xl text-cyan-300">end. program</p>
        </template>
        <template #body>
          <div class="text-header-md flex w-full flex-col p-16 capitalize">
            <header class="flex flex-col items-center px-40 text-center">
              <p class="text-6xl leading-snug text-cyan-200">
                Qu'est-il arrivé à M. Masmoudi ? Tout ce que vous devez savoir
                sur cette affaire.
              </p>
              <div class="normal-case text-white/95">
                par <span class="text-white">Detective Ziad</span>,
                <a href="#">suspects.vercel.app</a>
                <br />
                <Icon icon="mdi:clock" class="-mb-[2px]" />
                Avril 1, 2016, 2:43 PM
              </div>
            </header>
            <!--            <img src="/images/map.png" alt="World map in white color" />-->
            <hr class="border-1 mt-8 mb-16 border-dashed border-cyan-300" />
            <div class="flex">
              <div class="text-2xl normal-case text-cyan-200">
                <div>
                  <p class="pb-4 text-5xl font-black">Que ç'est-il passer ?</p>
                  <p class="font-light text-white">
                    M. Masmoudi a été retrouvé mort dans son bureau à 14h43.
                  </p>
                </div>
                <br class="my-4" />
                <div>
                  <p class="pb-4 text-4xl font-black">Suspects potentiels</p>
                  <div id="suspects" class="font-light text-white">
                    <ul>
                      <li>- Abed Teboul</li>
                      <li>- Aness Rezzoug</li>
                      <li>- Youceff Harmanani</li>
                      <li>- Ziad Rafei</li>
                      <li>- Rami Menai</li>
                    </ul>
                  </div>
                </div>
                <br class="my-4" />
                <div>
                  <p class="pb-4 text-4xl font-black">Media et Autre</p>
                  <br />
                  <div class="border-thick overflow-hidden border-4">
                    <iframe
                      width="700"
                      height="395"
                      allowfullscreen="allowfullscreen"
                      src="https://www.youtube.com/embed/0_vGABvGOZM"
                    >
                    </iframe>
                  </div>
                </div>
              </div>
              <div class="mr-0 ml-auto">
                <IdentityCard
                  name="Ismail Masmoudi"
                  photo="/images/ismail.png"
                  date="Avril 1, 2016"
                  birthdate="Janvier, 2001"
                  deathdate="Avril 1, 2016"
                  :age="15"
                  gender="Homme"
                  job="Employeur"
                />
              </div>
            </div>
          </div>
        </template>
      </TextBox>
    </div>
  </NuxtLayout>
</template>
