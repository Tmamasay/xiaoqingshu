<template>
  <div>
    <p class="card">
      {{text}}
    </p>
    <i-button type="primary" bind:click="handleClick">这是一个按钮</i-button>
  </div>
</template>

<script>
export default {
  props: ['text'],
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
