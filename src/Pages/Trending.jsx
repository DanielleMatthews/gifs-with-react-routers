import { getTrending } from '../services/getRequests'
import { useState, useEffect } from 'react'
import '../App.css'

export default function Trending(){
    const [trending, setTrending] = useState([])
    
    useEffect(()=>{
        getTrending()
        .then(res => setTrending(res.data.data))
    }, [])
    console.log(trending)

    return(
    <div id='app'> 
      <h1 id="trendH1"> Trending </h1>
      <ol> 
        {trending.map((trend, i) => (
            <li key={i}> 
            <h3 id="trendH3"> {trend.title}</h3>
            <img src={trend.images.downsized_large.url}></img>  <br/><br/><br/>
            </li>
            ))}
        </ol>
        
    </div>
    )
}