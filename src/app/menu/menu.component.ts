import { Component, OnInit } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { SendService } from '../send.service';
import { Observable } from 'rxjs';
import { Send } from '../send.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

// Main Menu/HomePage component

export class MenuComponent implements OnInit {
  opened = true;
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';
  mArticles:Array<any>;
  mSources:Array<any>;
  
  constructor(private newsapi:NewsApiService){
    console.log('app component constructor called');         
  }


  watcher: Subscription;

  ngOnInit() {
    //load articles
  this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
//load news sources
this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);  
}

// show source
searchArticles(source){
console.log("selected source is: "+source);
this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
}

}
