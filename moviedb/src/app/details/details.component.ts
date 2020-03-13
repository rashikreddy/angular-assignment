import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { _ParseAST } from '@angular/compiler';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  constructor(private activeroute:ActivatedRoute,private movieservies:MoviesService) { }
  public id:number;
  public details:any;
  ngOnInit(): void {
    this.activeroute.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.id = id;
      this.movieservies.getById(this.id).subscribe(data=>{
        data.poster_path ="https://image.tmdb.org/t/p/original"+ data.poster_path;
        this.details = data
      });
    });
  }

  OnClick = () => {
    if(this.details.homepage)
    window.open(this.details.homepage);
  }
}