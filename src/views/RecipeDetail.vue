<template>
  <div class="md-layout">
    <div class="title"><h1>{{ recipe.title }}</h1></div>
      <div class="md-card card-item">
        <div class="img">
          <img :src="recipe.image" alt="">
        </div>
        <div class="content">
          <router-link to="/">
            <i class="material-icons md-36 icon arrow">arrow_back</i>
          </router-link>
          <h2>{{ recipe.dishTypes[0] }}</h2>
          <ul class="recipe-stats">
            <li class="recipe-stats-item">
              <h2>{{ recipe.readyInMinutes }}</h2>
              <p>Mins</p>
            </li>
              <li class="recipe-stats-item">
              <h2>{{ recipe.servings }}</h2>
              <p>Servings</p>
            </li>
              <li class="recipe-stats-item">
              <h2>{{ recipe.pricePerServing }}$</h2>
              <p>Price</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-item md-card">
          <div class="recipe-summary">
            <h2>Instructions</h2>
            <p>{{ recipe.instructions }}</p>
          </div>
          <div class="recipe-ingredients">
            <h2>Ingredients</h2>
            <ul>
              <li v-for="ingredient in recipe.extendedIngredients" :key="ingredient.id">
                {{ ingredient.original }}
              </li>
            </ul>
          </div>
      </div>
  </div>
</template>

<script>
import getRecipeDetails from '../services/RecipeCalls';
export default {
  name: "RecipeDetail",
  data() {
    return {
      recipe: []
    }
  },
  props: {
    id: Number
  },
  created() {
    getRecipeDetails.getRecipeDetails(this.id)
      .then(res => {
        this.recipe = res.data
        console.log('recipe-details', this.recipe)
      })
  }
}
</script>

<style scoped>
  h1 {
    font-size: 1.5em;
  }
  .title {
    display: flex;
    flex-wrap: wrap;
    background: var(--gunmetal);
    margin-bottom: 1em;
    align-items: center;
    justify-content: center;
    color: #fff;
    width: 100%;
    padding: 2em 0;
    margin-bottom: 2em;
  }

  .card-item {
    width: 700px;
    margin: 2em auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    justify-content: center;
    background-color: var(--cultured);
  }
  /* .md-card-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    justify-content: center;
  } */
  .img {
    width: 300px;
    background-color: var(--cultured);
  }
  .img img {
    border-radius: 15px;
  }
  .content {
    margin: 0.5em 1em .5em 1em;
  }

  .content .arrow {
    color: black;
  }

  .recipe-stats {
    display: flex;
  }
  .recipe-stats-item {
    list-style: none;
    margin-right: 1em;
    padding-right: 1em;
    border-right: 1px solid black;
  }
  .recipe-stats-item:last-child {
    border: none;
    padding: 0;
    margin: 0;
  }

  .recipe-summary {
    text-align: left;
    padding-left: .75em;
  }

  .recipe-summary h2 {
    text-align: center;
  }

  .recipe-ingredients {
    height: 100%;
    background-color: var(--orange-yellow-crayola);
  }

  .recipe-ingredients ul li {
    text-align: left;
  }
  
  @media (max-width: 650px) {
    .card-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: auto;
    }
    .recipe-summary {
      width: 50%;
      margin: 0 auto;
    }
    .content ul {
      padding-left: 0;
    }
  }
</style>