let token = window.localStorage['token'];

namespace myapp.Controllers {

  export class HomeController {
    public movies

    public deleteMovie(id) {
      alert('hit')
      this.movieService.removeMovie(id);
    }

    constructor(
      private movieService
    ) {
      let payload = JSON.parse(window.atob(token.split('.')[1]));
      this.movies = this.movieService.getMovies(payload.id);
    }
  }

  export class AddMovieController {
    public movie

    public addMovie() {
      let payload = JSON.parse(window.atob(token.split('.')[1]));
      this.movie.owner_id = payload.id;
      this.movieService.saveMovie(this.movie);
    }

    public constructor(
      private movieService
    ) {

    }
  }

  export class EditMovieController {
    public movie
    public id

    public editMovie() {
      this.movie.id = this.id;
      this.movieService.saveMovie(this.movie);
    }

    constructor(
      private movieService,
      public $stateParams
    ) {
      if($stateParams) {
        this.id = $stateParams['id'];
      }
    }
  }

  export class LoginController {
    public userInfo

    public login() {
      this.userService.loginUser(this.userInfo).then((data) => {
        this.$window.localStorage.setItem("token", JSON.stringify(data.token));
        this.$state.go('home');
      })
    }

    public constructor(
      private userService,
      public $window,
      public $state
    ) {}
  }

  export class RegisterController {
    public user

    public signup() {
      this.userService.registerUser(this.user).then(() => {
        alert('signup successful, please login');
      })
    }

    public constructor(
      private userService
    ) {}
  }

}
