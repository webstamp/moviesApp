import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../movies/movies.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"})
export class HeaderComponent implements OnInit {
  title = "Thanasis MovieTime";
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {}

}
