'use client'
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';


export default function Home() {
  const [query, setQuery] = useState('avengers');
  const [movies, setMovies] = useState([]);

  const apiURL = `http://www.omdbapi.com/?apiKey=${process.env.NEXT_PUBLIC_OMDB_KEY}`

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
    <main className="main">
        <ul className='movies'>
          { movies && (
            movies.map((movie, idx) => {
              return (
                <li key={idx}>
                  <Link className="link" href={`/movie/details/${movie.imdbID}`}>
                    <Image className="track-image" 
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
    </main>
  )
}
