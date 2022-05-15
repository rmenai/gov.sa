<script setup lang="ts">
import { Icon } from "@iconify/vue";
const ended = useEnded();
onMounted(() => {
  ended.value = true;
});
useHead({
  title: "Case 37325",
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
                Février 7, 2018, 2:43 PM
              </div>
            </header>
            <!--            <img src="/images/map.png" alt="World map in white color" />-->
            <hr class="border-1 mt-8 mb-16 border-dashed border-cyan-300" />
            <div class="flex">
              <div class="text-2xl normal-case text-cyan-200">
                <div>
                  <p class="pb-4 text-5xl font-black">Que s'est-il passé ?</p>
                  <p class="font-light text-white">
                    M. Masmoudi a été retrouvé mort dans son bureau à
                    <span class="font-bold text-cyan-300">14h43</span>, après
                    avoir interviewé 4 personnes. Cependant, M. Nuka, premier
                    suspect et permière personne interviewée de la journée, n'a
                    pas pu commettre le crime vu qu'il était a l'aéroport à
                    l'heure du crime.
                  </p>
                </div>
                <br class="my-4" />
                <div>
                  <p class="pb-4 text-4xl font-black">Suspects potentiels</p>
                  <div id="suspects" class="font-light text-white">
                    <ul>
                      <li>
                        <details>
                          <summary>Aness Rezzoug</summary>
                          <br />
                          <img
                            src="/images/aness.png"
                            alt="Aness criminal"
                            width="345"
                          />
                          <br />
                        </details>
                      </li>
                      <li>- Abed Teboul</li>
                      <li>- Youssef Harmanani</li>
                      <li>- Rami Menai</li>
                    </ul>
                  </div>
                </div>
                <br class="my-4" />
                <div>
                  <p class="pb-4 text-4xl font-black">Media et Autre</p>
                  <br />
                  <div class="border-thick w-[700px] overflow-hidden border-4">
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
                  date="Mars 20, 2008"
                  birthdate="Janvier, 1978"
                  deathdate="Février 7, 2018"
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
