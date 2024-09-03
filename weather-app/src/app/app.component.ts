import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MediaMatcher} from "@angular/cdk/layout";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  title = 'weather-app';
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher) {

    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
