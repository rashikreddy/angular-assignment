import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})

export class PopularComponent implements OnInit {
  movies= []
  constructor(private movieServie :MoviesService,private router:Router) { }
  ngOnInit(): void {
    this.movieServie.getPopularMovies().subscribe(
      
      data=>{
        data.results.forEach(i=>{
          i.poster_path ="https://image.tmdb.org/t/p/original"+ i.poster_path;
          
        });
        this.movies=data.results});
  }
  OnClick(id){
    this.router.navigate(['/details',id]);
  }
}