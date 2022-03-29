import { getRandom } from '../services/getRequests'
import { useState, useEffect } from 'react'
// import './App.css'

export default function Home(){
    //save api response into state variable 
    const [randomGif, setRandomGif] = useState([])

    useEffect(()=>{
        getRandom()
        .then(res => setRandomGif(res.data.data.images.downsized_large.url))
    }, [])
    // console.log(randomGif)
    function handleClick(){
        getRandom()
        .then(res => setRandomGif(res.data.data.images.downsized_large.url))
    }
    return(
        <div> 
            <h1> Home</h1>
            <button onClick={handleClick}> Click for Random Gif</button>
            <img src={randomGif}></img>
        </div>
    )
}