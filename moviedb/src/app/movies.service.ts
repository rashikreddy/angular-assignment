import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http:HttpClient) { }
  getPopularMovies = ():Observable<any> => {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=4aba7ad84be57d2581a8e0e63575681e&language=en-US';
    return this.http.get<any>(url);
  }
  getMovies = (search):Observable<any> => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=4aba7ad84be57d2581a8e0e63575681e&language=en-US&query=${search}&include_adult=false`
    return this.http.get<any>(url);
    }
   getById = (id):Observable<any> => {
     const url = `https://api.themoviedb.org/3/movie/${id}?api_key=4aba7ad84be57d2581a8e0e63575681e&language=en-US`;
     return this.http.get<any>(url);
   }
}