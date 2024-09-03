import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatTabLink, MatTabNav, MatTabNavPanel} from "@angular/material/tabs";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatTabNav, RouterLinkActive, NgForOf, MatTabLink, RouterLink, MatTabNavPanel],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weather-app';

  readonly navLinks = [
    {
      label: "Home",
      link: "home",
      index: 0
    },
    {
      label: "Favorites",
      link: "favorites",
      index: 1
    }
  ];
}
