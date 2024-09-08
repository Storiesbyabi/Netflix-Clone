import React, { useEffect,useState } from 'react'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import axios from 'axios'
import './Banner.css'
const Banner = () => {

  const [movie, setMovie] = useState()

  useEffect(() => {
  axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    setMovie(response.data.results[0])
  })
  })

  return (
    <div
    style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ''})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title: ''}</h1>
            <div className="banner_buttons">
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='discription'>{movie ? movie.overview : ''}</h1>
        </div>
    <div className="fade-bottom">
    <img src="https://api.themoviedb.org/3/movie/550?api_key=41bf06bcbce3cfaOa8d11f4c4c8c8473" alt="" />
    </div>
    </div>
  )
}

export default Banner