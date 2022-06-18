<template>
  <div>
    <h1>test with vue test utils and jest</h1>
    <button v-show="loggedIn">Log out</button>
    <!--output-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      loggedIn: false, //input
    };
  },
};
</script>
