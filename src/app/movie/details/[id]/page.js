'use client'
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';

import Slider from '@/components/slider';

import '@/scss/movie.scss';
 
export default function Movie({params}) {
  const [movie, setMovie] = useState({});

  const apiURL = `https://www.omdbapi.com/?apiKey=${process.env.NEXT_PUBLIC_OMDB_KEY}`

  useEffect(() => {
    getMovie();
  }, []);

  function getMovie() {
    axios.get(`${apiURL}&i=${params.id}`)
    .then(res => {
      console.log('res', res.data);
      setMovie(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  return (
    <main className="">
      {movie && (
        <section className="container">
          <div className="movie" style={{backgroundImage:`url(${movie.Poster})`}}>
              <div className="content">
                  <h1 className="title">
                    {movie.Title}
                  </h1>
                  <p className="plot">
                    {movie.Plot}
                  </p>
                  {movie.Actors && (
                    <p className="actors">
                      Starring: {movie.Actors}
                    </p>
                  )}

                  <p className="details">
                    {movie.Rated && (
                      <span>{movie.Rated} • </span>
                    )}
                    {movie.Year && (
                      <span>{movie.Year} • </span>
                    )}
                    {movie.Genre && (
                      <span>{movie.Genre} • </span>
                    )}
                    {movie.Type && (
                      <span className="type">{movie.Type}</span>
                    )}
                  </p>
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
        </section>
      )}
    </main>
  )
}


