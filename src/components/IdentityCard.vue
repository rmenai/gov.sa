<script setup lang="ts">
defineProps({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  date: { type: String, required: true },
  birthdate: { type: String, required: true },
  deathdate: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  job: { type: String, required: true },
});
</script>

<template>
  <div class="border-thick w-[350px] p-2">
    <div
      class="text-header-md w-full bg-cyan-300/10 py-4 text-center text-4xl capitalize"
    >
      <p class="text-cyan-300">{{ name }}</p>
    </div>
    <div class="flex scale-75 flex-col items-center gap-2 pt-4">
      <img
        :src="photo"
        alt="Image of Ismail Masmoudi in a suit"
        class="w-96 brightness-75 grayscale filter"
      />
      <p>{{ name }} le {{ date }}</p>
    </div>
    <hr class="my-4 border-cyan-300" />
    <div class="text-header-md w-full pl-16 pt-2 pb-4 text-2xl capitalize">
      <div class="grid grid-cols-2">
        <p>Naissance</p>
        <p class="text-xl text-white/90">{{ birthdate }}</p>
      </div>
      <div class="grid grid-cols-2">
        <p>Jour de Mort</p>
        <p class="text-xl text-white/90">{{ deathdate }}</p>
      </div>
      <div class="grid grid-cols-2">
        <p>Dernier travail</p>
        <p class="text-xl text-white/90">{{ job }}</p>
      </div>
      <div class="grid grid-cols-2">
        <p>Sexe</p>
        <p class="text-xl text-white/90">{{ gender }}</p>
      </div>
    </div>
  </div>
</template>
