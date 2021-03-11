import axios from 'axios';
import Nprogress from 'nprogress';

const apiKey = '752a88639f144e299daa236ecf156aef';

axios.interceptors.request.use( config => {
  Nprogress.start();
  return config
})

axios.interceptors.response.use( response => {
  Nprogress.done();
  return response
})

const call1 = axios.get(`https://api.spoonacular.com/recipes/search?type=bread&apiKey=${apiKey}&includeNutrition=true`)
const call2 = axios.get(`https://api.spoonacular.com/recipes/search?type=main course&apiKey=${apiKey}&includeNutrition=true`)
const call3 = axios.get(`https://api.spoonacular.com/recipes/search?type=dessert&apiKey=${apiKey}&includeNutrition=true`)

export default {
  getCourseType(){
    return axios.all([call1, call2, call3])
  },
  getRecipeDetails(recipeId){
    return axios.get(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}&includeNutrition=false`
    )
  }
}














// const apiCall = axios.create({
//   baseURL: "api.spoonacular.com/recipes",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json"
//   }
// });


// const recipeStarter = apiCall.get(
//   `/complexSearch?query=pasta&maxFat=25&number=2&apiKey=${apiKey}`
// )
// const recipeMain = apiCall.get(
//   `/search?type=main course&apiKey=${apiKey}&includeNutrition=true`
// )
// const recipeDessert = apiCall.get(
//   `/search?type=dessert&apiKey=${apiKey}&includeNutrition=true`
// )