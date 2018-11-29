import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import { Observable } from 'rxjs';
import {Post} from '../post.model';
import {Router, ActivatedRoute} from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})

// Component for showing our List
export class CountryListComponent implements OnInit {

  opened = true;
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';
  posts: any = [];

  constructor(private ps:PostService){}

  ngOnInit(){
// Allows us to read data from MangoDB
    this.ps.getPostsData().subscribe(data => {
        this.posts = data;
    });
   }
// Deletes item from MangoDB
   onDelete(id:String){
     console.log("Delete called "+ id);
     this.ps.deletePost(id).subscribe(() =>
     {
        this.ngOnInit();
     })
   }
}
