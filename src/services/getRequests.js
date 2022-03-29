import axios from 'axios' //npm i axios
const RANDOM_URL = `https://api.giphy.com/v1/gifs/random?api_key=mJ97BnwkbDUOul1e8EheANqYqso6dL1I`
const TRENDING_URL= `https://api.giphy.com/v1/gifs/trending?api_key=mJ97BnwkbDUOul1e8EheANqYqso6dL1I`

//why not export default, its not a component (home, trending, eroorpage, search)

export function getRandom(){
    const response = axios.get(RANDOM_URL)
    return response
}

export function getTrending(){
    const response = axios.get(TRENDING_URL)
    return response 
}