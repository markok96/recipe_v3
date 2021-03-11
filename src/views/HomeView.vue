<template>
  <div>
    <div>
      <div class="title"><h1>List of recipes</h1></div>
      <div class="home-wrapper" v-if="recipes.length">
        <div>
          <h1>Entrée</h1>
          <RecipeCard v-for="recipe in recipes[0].data.results" :key="recipe.id" :recipe="recipe"></RecipeCard>
        </div>
        <div>
          <h1>Main course</h1>
          <RecipeCard v-for="recipe in recipes[1].data.results" :key="recipe.id" :recipe="recipe"></RecipeCard>
        </div>
        <div>
          <h1>Dessert</h1>
          <RecipeCard v-for="recipe in recipes[2].data.results" :key="recipe.id" :recipe="recipe"></RecipeCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from '../components/RecipeCard';
import getCourseType from '../services/RecipeCalls';
import axios from 'axios';
export default {
  name: "HomeView",
  components: {
    RecipeCard
  },
  data() {
    return {
      recipes: []
    }
  },
  created() {
    getCourseType.getCourseType()
      .then(
        axios.spread((...result) => {
          this.recipes = result
          console.log('recipes', this.recipes);
        })
      )
      .catch(error => {
        console.log('ERROR IN FETCHING DATA', error);
    })
  }
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .title {
    display: flex;
    flex-wrap: wrap;
    background: var(--middle-blue-green);
    margin-bottom: 1em;
    align-items: center;
    justify-content: center;
    color: #fff;
    width: 100%;
    padding: 2em 0;
    margin-bottom: 2em;
    border-radius: 0 0 15px 15px;
  }
  .home-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .home-wrapper > div {
    width: 280px;
    margin-bottom: 2em;
  }
  @media (min-width: 599px) {
    .home-wrapper > div {
      margin: 10px;
      width: 330px;
    }
  }
  .home-wrapper > div > h1 {
    position: relative;
    padding: 1.3em 0;
    background: var(--space-cadet);
    margin-top: 0;
    color: #fff;
    text-transform: uppercase;
    border-bottom: 15px solid var(--middle-blue-green);
    border-radius: 10px 10px 0 0;
  }
  .home-wrapper > div > h1:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 0;
    height: 0;
    border-top: solid 15px var(--space-cadet);
    border-left: solid 15px transparent;
    border-right: solid 15px transparent;
  }
</style>