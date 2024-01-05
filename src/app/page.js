'use client'
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';

import '@/scss/home.scss';

export default function Home() {
  const [query, setQuery] = useState('avengers');
  const [movies, setMovies] = useState([]);

  const apiURL = `https://www.omdbapi.com/?apiKey=${process.env.NEXT_PUBLIC_OMDB_KEY}`

  useEffect(() => {
    axios.get(`${apiURL}&s=${query}`)
    .then(res => {
      console.log('res', res.data.Search);
      setMovies(res.data.Search);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  
  return (
    <main className="home">
      <section className="hero">
        <div className="content container">
          <h1>Unlimited movies, TV shows, and more</h1>
        </div>
      </section>
      <section className="list">
        <ul className='movies'>
          { movies && (
            movies.map((movie, idx) => {
              return (
                <li key={idx}>
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
      </section>
    </main>
  )
}
