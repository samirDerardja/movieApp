import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IMovie } from '../../interface/IMovie';
import { FavoriteMovieProvider } from '../../providers/favorite-movie-ts/favorite-movie';

/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  movie:IMovie;
  favorite:boolean = false;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public favoriteMovieProvider: FavoriteMovieProvider) {
  }


  ionViewDidLoad() {
    this.movie = this.navParams.data;
    this.favoriteMovieProvider
    .isFavortieMovie(this.movie)
    .then(value => {this.favorite = value});
  }

  toggleFavorite():void {
    
  
    this.favorite = !this.favorite;
    this.favoriteMovieProvider.toogleFavoriteMovie(this.movie);
  }

}
