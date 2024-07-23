import {HttpAdapter} from '../../../config/adapters/http.adapter';
import {NowPlayingResponse} from '../../../infrastruture/interfaces/movies-db.responses';
import {MovieMapper} from '../../../infrastruture/mappers/movies.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesUpComingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcomingMovies = await fetcher.get<NowPlayingResponse>('/upcoming');

    return upcomingMovies.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log({error});
    throw new Error(`Error on GET request: ${error}`);
  }
};
