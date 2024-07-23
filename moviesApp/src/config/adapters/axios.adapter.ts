import axios, {AxiosInstance} from 'axios';
import {HttpAdapter} from './http.adapter';

interface Options {
  baseURL: string;
  params: Record<string, string>;
}

export class AxiosAdapter implements HttpAdapter {
  private axiosInstance: AxiosInstance;

  constructor(options: Options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseURL,
      params: options.params,
    });
  }

  async get<T>(
    url: string,
    options?: Record<string, unknown | undefined>,
  ): Promise<T> {
    try {
      const {data} = await this.axiosInstance.get(url, options);

      return data;
    } catch (error) {
      console.log({error});
      throw new Error(`Error on GET request: ${error}`);
    }
  }
}
