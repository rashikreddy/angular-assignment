import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  constructor(private activatedroute:ActivatedRoute,private movieservice : MoviesService,private router:Router) { }
  
  movies = [];
  public search = '';
  
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((params:ParamMap)=>{
      let search = params.get('search');
      this.search = search;
      this.movieservice.getMovies(this.search).subscribe(data=>{
        data.results.forEach(i=>{
          i.poster_path ="https://image.tmdb.org/t/p/original"+ i.poster_path;
        });
        this.movies=data.results});
      })
    };
  
    OnClick(id){
      this.router.navigate(['/details',id]);
    }
}