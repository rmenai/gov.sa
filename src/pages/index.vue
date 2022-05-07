<script setup lang="ts">
import { animate as animateProgress } from "~/composables/animations/progress";
useHead({
  title: "Welcome",
});
</script>

<template>
  <NuxtLayout name="home">
    <div class="flex gap-x-16">
      <div class="flex w-[375px] flex-col gap-4">
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
                Hello <span class="font-bold text-yellow-300">User</span>. This
                is a reproduction of the graphics in the boardroom scene in
                Tron: Legacy. If you have not seen that movie, check out
                <a href="http://work.gmunk.com/TRON-Board-Room"
                  >this background material on the making of that scene</a
                >
                before proceeding.
              </p>
              <br />
              <p>
                To make this a bit more fun, the boardroom is configured to
                visualize live updates from
                <span class="font-bold text-yellow-300">Github</span> and
                <span class="font-bold text-yellow-300">Wikipedia</span>, with
                more streams to come. Click on a stream in the window to the
                right to continue.
              </p>
              <br />
              <p>
                The boardroom visualization requires the use of
                <a href="http://get.webgl.org/">WebGL</a> and
                <a href="https://www.w3.org/TR/eventsource/">Event Source</a>.
                The test below indicates the availability of these features on
                your system.
              </p>
              <br />
              <p>
                This was created by
                <a href="https://twitter.com/arscan">@arscan</a> as a learning
                exercise. It is not affiliated with Disney, Tron: Legacy, Encom,
                Wikipedia or
                <a href="https://github.com/arscan">Github</a>
                in any way. The source is available on Github.
              </p>
            </div>
          </template>
        </TextBox>
        <TextBox :animation-delay="50">
          <template #start>
            WEBGL <span class="text-cyan-300">.test</span>
          </template>
          <template #end>
            datalink:
            <span v-if="datalink.progress == 100" class="text-red-600">
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
            <div class="border-1 border-thick mb-1 h-2 w-12 rounded-md"></div>
            <div class="border-thin mb-1 mr-8 h-2 w-10 rounded-md"></div>
            <div class="border-1 border-thick mb-1 h-2 w-14 rounded-md"></div>
          </template>
        </TextLabel>
      </div>

      <div class="flex w-[450px] flex-col gap-4">
        <TextLabel>
          <template #start>
            Central system data ...
            <span class="text-cyan-500"> Launch encom globalization </span>
          </template>
          <template #end> OIA | 012 </template>
        </TextLabel>
        <TextBox :animation-delay="150">
          <template #start>
            Boardroom visualization ... Please select data
            <span class="text-cyan-300">.stream</span>
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

<script lang="ts">
export default {
  data() {
    return {
      datalink: { progress: 0 },
    };
  },
  mounted() {
    animateProgress(this.datalink);
  },
};
</script>
