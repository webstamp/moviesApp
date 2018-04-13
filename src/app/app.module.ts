import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';

import { MoviesService } from './movies/movies.service';
import { StoreModule} from '@ngrx/store';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState } from './store/IAppState'

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MoviesComponent },
  { path: 'movie/:id', component: DetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HeaderComponent,
    DetailsComponent
  ],
  imports: [
    StoreModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MoviesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(ngRedux: NgRedux<IAppState>){
  //   ngRedux.provideStore(store);
  
 }
