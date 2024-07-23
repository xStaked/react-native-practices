import React from 'react';
import {Movie} from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases/movies';
import {moviewDBFetcher} from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [nowPlaying, setNowPlaying] = React.useState<Movie[]>([]);
  const [popular, setPopular] = React.useState<Movie[]>([]);
  const [topRated, setTopRated] = React.useState<Movie[]>([]);
  const [upComing, setUpComing] = React.useState<Movie[]>([]);

  React.useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(moviewDBFetcher);
    const popularPromise = UseCases.moviesPopularUseCase(moviewDBFetcher);
    const topRatedPromise = UseCases.moviesTopRatedUseCase(moviewDBFetcher);
    const upComingPromise = UseCases.moviesUpComingUseCase(moviewDBFetcher);

    const [nowPlayingMovies, popularMovies, topRatedMovies, upComingMovies] =
      await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upComingPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpComing(upComingMovies);

    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upComing,
  };
};
