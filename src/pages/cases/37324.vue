<script setup lang="ts">
import { Icon } from "@iconify/vue";
const ended = useEnded();
onMounted(() => {
  ended.value = true;
});
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
          <p class="ml-2 py-2 text-2xl">Affaire 37324</p>
          <p class="ml-2 py-2 text-2xl text-cyan-300">| Albert Einstein</p>
        </template>
        <template #end>
          <p class="pr-2 text-xl text-cyan-300">end. program</p>
        </template>
        <template #body>
          <div class="text-header-md flex w-full flex-col p-16 capitalize">
            <header class="flex flex-col items-center px-32 text-center">
              <p class="text-6xl leading-snug text-cyan-200">
                Un des produits les plus chers vient de disparaître. Que
                s'est-il vraiment passé ?
              </p>
              <div class="normal-case text-white/95">
                par <span class="text-white">Detective Ziad</span>,
                <a href="#">suspects.vercel.app</a>
                <br />
                <Icon icon="mdi:clock" class="-mb-[2px]" />
                Janvier 2, 2018, 2:00 PM
              </div>
            </header>
            <!--            <img src="/images/map.png" alt="World map in white color" />-->
            <hr class="border-1 mt-8 mb-16 border-dashed border-cyan-300" />
            <div class="flex">
              <div class="text-2xl normal-case text-cyan-200">
                <div>
                  <p class="pb-4 text-5xl font-black">Que s'est-il passé ?</p>
                  <p class="font-light text-white">
                    Un des produits les plus chers du monde vient de disparaître
                    des mains de
                    <span class="font-bold text-cyan-300">Albert Einstein</span
                    >, <br />
                    le plus grand scientifique du monde encore vivant. Plus
                    tard, ce produit a été retrouvé dans le
                    <span class="font-bold text-yellow-300">Dark Web</span>,
                    acheté par une personne, ou une organisation inconnue.
                  </p>
                </div>
                <br class="my-4" />
                <div>
                  <p class="pb-4 text-5xl font-black">Phosphorium</p>
                  <p class="font-light text-white">
                    Ce mysterieux produit, appellé
                    <span class="font-bold text-cyan-300">Phosphorium</span>,
                    est un des produits les plus chers et rares du monde. Il a
                    une valeur estimée de
                    <span class="font-bold text-yellow-300"
                      >37000 dollars / g</span
                    >, non seulement pour sa rareté mais aussi pour son
                    utilisation dans les réacteurs nucléaires. Il est souvent
                    trouvé sous forme de graines crystalliques, aussi
                    transparentes que l'eau.
                  </p>
                </div>
              </div>
              <div class="mr-0 ml-auto">
                <IdentityCard
                  name="Albert Einstein"
                  photo="/images/albert.png"
                  date="Mars 13, 2005"
                  birthdate="Janvier 1, 1972"
                  deathdate="Encore vivant"
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
