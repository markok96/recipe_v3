<template>
  <div>
    <footer>
      <p> &#169; Marko Korolija 2021</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
  footer {
    display: flex;
    width: 100%;
    background-color: var(--gunmetal);
    color: #fff;
    padding: 2em 1em 2em 1em;
    justify-content: center;
    align-items: center;
    border-top: 1px black solid;
}
</style>