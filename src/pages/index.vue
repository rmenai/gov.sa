<script setup lang="ts">
import { animate as animateProgress } from "~/composables/animations/progress";

const datalink = ref({ progress: 0 });

onMounted(() => {
  animateProgress(datalink.value);
});

useHead({
  title: "Welcome",
});
</script>

<template>
  <NuxtLayout name="home">
    <div class="gap-x-22 flex">
      <div class="flex w-[375px] flex-col gap-8">
        <TextLabel>
          <template #start>
            Encom touch app
            <p>
              <span class="text-cyan-500">OS</span>
              <span class="text-yellow-500">12</span>
            </p>
          </template>
          <template #end> OS | 012 </template>
        </TextLabel>

        <TextBox>
          <template #body>
            <div class="py-1 px-2 pb-12">
              <p>
                Bonjour
                <span class="font-bold text-yellow-300">Utilisateur</span>.
                Bienvenue sur le site officiel d'<span
                  class="font-bold text-cyan-300"
                  >Encom Detective Agency</span
                >.
              </p>
              <br />
              <p>
                Ici vous trouverez toute sorte d'information liée aux enquêtes
                poursuivies par notre équipe,
              </p>
              <div class="h-68"></div>
            </div>
          </template>
        </TextBox>
        <TextBox :animation-delay="50">
          <template #start>
            WEBGL <span class="text-cyan-300">.test</span>
          </template>
          <template #end>
            datalink:
            <span v-if="datalink.progress === 100" class="text-red-600">
              error
            </span>
            <span v-else>{{ `${datalink.progress}%` }}</span>
          </template>
          <template #body>
            <ClientOnly>
              <WebGLBandwidth />
              <template #fallback>
                <div class="h-40 w-full"></div>
              </template>
            </ClientOnly>
          </template>
        </TextBox>
        <TextLabel :above="false">
          <template #start> Docking channel </template>
          <template #end>
            <div class="border-1 border-thick h-2 w-12 rounded-md"></div>
            <div class="border-thin mr-8 h-2 w-10 rounded-md"></div>
            <div class="border-1 border-thick h-2 w-14 rounded-md"></div>
          </template>
        </TextLabel>
      </div>

      <div class="flex w-[475px] flex-col gap-8">
        <TextLabel>
          <template #start>
            Central system data ...
            <span class="text-cyan-500"> Launch encom globalization </span>
          </template>
          <template #end> OIA | 012 </template>
        </TextLabel>
        <TextBox :animation-delay="150">
          <template #start>
            Terminal ... Please select a folder
            <span class="text-cyan-300">.ssh</span>
          </template>
          <template #body>
            <Terminal />
          </template>
        </TextBox>
        <VirtualKeyboard />
        <TextLabel :above="false">
          <template #start>
            Touchpoint keyboard ...
            <span class="text-cyan-500"> Interaction sequencing </span>
          </template>
          <template #end> SYS | O12 </template>
        </TextLabel>
      </div>
    </div>
  </NuxtLayout>
</template>
