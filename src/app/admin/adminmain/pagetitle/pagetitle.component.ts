import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pagetitle',
  templateUrl: './pagetitle.component.html',
  styleUrl: './pagetitle.component.css'
})
export class PagetitleComponent implements OnInit {
   pageTitle:String = "Dashboard";
  constructor(
    protected route : ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.url.subscribe((segments)=>{
      if(segments.length === 0){
        this.pageTitle = "Dashboard";
      }
      else {
        this.pageTitle = segments.map((segment) => this.capitalize(segment.path)).join('/');
      }
    })
  }
  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}
