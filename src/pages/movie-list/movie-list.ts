import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieDetailPage } from '../movie-detail/movie-detail';
import { IMovie } from '../../interface/IMovie';
import { MovieApiProvider } from '../../providers/movie-api/movie-api';

/**
 * Generated class for the MovieListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-list',
  templateUrl: 'movie-list.html',
})
export class MovieListPage {

  movies = new Array<IMovie>();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private MovieApiProvider : MovieApiProvider) {
  }


  ionViewDidLoad() {
    console.log("ionViewDidLoad MovieListPage");
    this.MovieApiProvider.getMovies().subscribe(data =>{
    this.movies = data;
 console.log(this.movies);
  })

}

goToDetail(movie:IMovie) {

  this.navCtrl.push(MovieDetailPage, movie);
}

}
