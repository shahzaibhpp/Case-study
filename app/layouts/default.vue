<template>
  <div class="layout">
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
}

.main {
  flex: 1;
}
</style>
