'use client'
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';

import YoutubeIframe from '@/components/youtubeIframe';

import '@/scss/movie.scss';
 
export default function Movie({params}) {
  const [movie, setMovie] = useState();
  const [videoId, setVideoId] = useState();

  const apiURL = `https://www.omdbapi.com/?apiKey=${process.env.NEXT_PUBLIC_OMDB_KEY}`

  const youtubeAPI = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&key=${process.env.NEXT_PUBLIC_YOUTUBE_DATA_API_KEY}`

  useEffect(() => {
    getMovie();
  }, []);


  function getMovie() {
    axios.get(`${apiURL}&i=${params.id}`)
    .then(res => {
      setMovie(res.data);
      getYTVideo(res.data.Title)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  function getYTVideo(query) {
    axios.get(`${youtubeAPI}&q=${query} official trailer`)
    .then(res => {
      setVideoId(res.data.items[0].id.videoId);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  
  
  return (
    <main className="movie">
      {movie && (
        <section className="container">
          <div className="wrapper" >
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
          {videoId && (
            <YoutubeIframe 
            videoId={videoId} 
            width={400} 
            height={400}
          />
          )}
        </section>
      )}
    </main>
  )
}


