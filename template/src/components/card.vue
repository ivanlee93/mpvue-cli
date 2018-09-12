<template>
  <div>
    <input type="text"
           class="form-control"
           v-model="text"
           placeholder="v-model" />
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
.form-control {
  display: block;
  text-align: center
}
</style>
