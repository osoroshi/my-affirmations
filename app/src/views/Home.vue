<template>
  <div class="background">
    <router-link class="button" :to="'affirmations'">Get my affirmation!</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style scoped>
.button {
  color: white;
  border-radius: 10px;
  background-color: #e7accf;
  padding: 20px;
  text-decoration: none;
}
</style>
