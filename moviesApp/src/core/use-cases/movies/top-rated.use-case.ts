import {HttpAdapter} from '../../../config/adapters/http.adapter';
import {MovieDBResponse} from '../../../infrastruture/interfaces/movies-db.responses';
import {MovieMapper} from '../../../infrastruture/mappers/movies.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesTopRatedUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<MovieDBResponse>('/top_rated');

    return topRated.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log({error});
    throw new Error(`Error on GET request: ${error}`);
  }
};
