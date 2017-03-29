var token = window.localStorage['token'];
var myapp;
(function (myapp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(movieService) {
                this.movieService = movieService;
                var payload = JSON.parse(window.atob(token.split('.')[1]));
                this.movies = this.movieService.getMovies(payload.id);
            }
            HomeController.prototype.deleteMovie = function (id) {
                alert('hit');
                this.movieService.removeMovie(id);
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AddMovieController = (function () {
            function AddMovieController(movieService) {
                this.movieService = movieService;
            }
            AddMovieController.prototype.addMovie = function () {
                var payload = JSON.parse(window.atob(token.split('.')[1]));
                this.movie.owner_id = payload.id;
                this.movieService.saveMovie(this.movie);
            };
            return AddMovieController;
        }());
        Controllers.AddMovieController = AddMovieController;
        var EditMovieController = (function () {
            function EditMovieController(movieService, $stateParams) {
                this.movieService = movieService;
                this.$stateParams = $stateParams;
                if ($stateParams) {
                    this.id = $stateParams['id'];
                }
            }
            EditMovieController.prototype.editMovie = function () {
                this.movie.id = this.id;
                this.movieService.saveMovie(this.movie);
            };
            return EditMovieController;
        }());
        Controllers.EditMovieController = EditMovieController;
        var LoginController = (function () {
            function LoginController(userService, $window, $state) {
                this.userService = userService;
                this.$window = $window;
                this.$state = $state;
            }
            LoginController.prototype.login = function () {
                var _this = this;
                this.userService.loginUser(this.userInfo).then(function (data) {
                    _this.$window.localStorage.setItem("token", JSON.stringify(data.token));
                    _this.$state.go('home');
                });
            };
            return LoginController;
        }());
        Controllers.LoginController = LoginController;
        var RegisterController = (function () {
            function RegisterController(userService) {
                this.userService = userService;
            }
            RegisterController.prototype.signup = function () {
                this.userService.registerUser(this.user).then(function () {
                    alert('signup successful, please login');
                });
            };
            return RegisterController;
        }());
        Controllers.RegisterController = RegisterController;
    })(Controllers = myapp.Controllers || (myapp.Controllers = {}));
})(myapp || (myapp = {}));
