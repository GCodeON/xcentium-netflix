'use client'
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';

import '@/scss/movie.scss';
 

export default function Movie({params}) {
  const [movie, setMovie] = useState({});

  const apiURL = `http://www.omdbapi.com/?apiKey=${process.env.NEXT_PUBLIC_OMDB_KEY}`

  useEffect(() => {
    axios.get(`${apiURL}&i=${params.id}`)
    .then(res => {
      console.log('res', res.data);
      setMovie(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  
  return (
    <main className="main">
        {movie && (
            <div className="movie">
                <div className="content">
                    <h1>{movie.Title}</h1>
                    <p>{movie.Plot}</p>
                </div>   
                <div className="media">
                  {movie.Poster && (
                    <Image 
                      className="image" 
                      src={movie.Poster} 
                      alt={movie.Title}
                      width={300}
                      height={444}
                    />
                  )}
                </div>      
            </div>
        )}
    </main>
  )
}


