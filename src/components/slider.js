'use client'
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';

import '@/scss/slider.scss';

export default function Slider({query}) {
  const [movies, setMovies] = useState([]);

  const apiURL = `https://www.omdbapi.com/?apiKey=${process.env.NEXT_PUBLIC_OMDB_KEY}`

  useEffect(() => {
    axios.get(`${apiURL}&s=${query}`)
    .then(res => {
      console.log('res', res.data.Search);
      let descendingByYear = res.data.Search.sort((a,b) => a.Year > b.Year);
      console.log('sort', res.data.Search);
      setMovies(descendingByYear);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  
  return (
    <div className="slider">
      <ul className='movies'>
        { movies && (
          movies.map((movie, idx) => {
            return (
              <li key={movie.imdbID}>
                <Link className="link" href={`/movie/details/${movie.imdbID}`}>
                  <Image className="poster" 
                    src={movie.Poster} 
                    alt={movie.Title}
                    width={300}
                    height={444}
                  />
                </Link>
              </li>
            )
          })
        )}
      </ul>
    </div>
  )
}
