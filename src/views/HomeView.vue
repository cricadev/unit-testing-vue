<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <AppHeader />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { AppHeader },
};
</script>
