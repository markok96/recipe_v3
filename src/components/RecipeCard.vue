<template>
  <div class="card md-card">
    <router-link :to="{ name: 'RecipeDetail', params: {id: recipe.id}}">
      <h2>{{recipe.title}}</h2>
    </router-link>
    <span>
      <div>
        <i class="material-icons md-36 icon">timer</i>
        <span>
          <time>Cooking Time: {{recipe.readyInMinutes}} Min</time>
        </span>
      </div>
      <div>
        <i class="material-icons md-36 icon">room</i>
        <span>
          <strong>{{recipe.servings}} Servings</strong>
        </span>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    recipe: Object
  }
}
</script>

<style scoped>
  .card {
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    text-align: left;
    margin: 1.5em 0;
    border-radius: 15px;
  }
  .card:nth-child(even) {
    background-color: var(--orange-yellow-crayola);
  }
  .card:nth-child(odd) {
    background-color: var(--middle-blue-green);
  }
  .card h1,h2,h3,h4,a,p,i {
    color: black;
  }
</style>