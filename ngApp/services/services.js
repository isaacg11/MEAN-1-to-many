var myapp;
(function (myapp) {
    var Services;
    (function (Services) {
        var UserService = (function () {
            function UserService($resource) {
                this.$resource = $resource;
                this.LoginResource = this.$resource('/userRoutes/api/Login/Local');
                this.SignUpResource = this.$resource('/userRoutes/api/Register');
            }
            UserService.prototype.registerUser = function (userObj) {
                return this.SignUpResource.save(userObj).$promise;
            };
            UserService.prototype.loginUser = function (userInfo) {
                return this.LoginResource.save(userInfo).$promise;
            };
            return UserService;
        }());
        Services.UserService = UserService;
        angular.module('myapp').service('userService', UserService);
        var MovieService = (function () {
            function MovieService($resource) {
                this.$resource = $resource;
                this.MovieResource = $resource('/api/movies/:id');
            }
            MovieService.prototype.saveMovie = function (movie) {
                return this.MovieResource.save(movie);
            };
            MovieService.prototype.getMovies = function (id) {
                return this.MovieResource.query({ id: id });
            };
            MovieService.prototype.removeMovie = function (id) {
                return this.MovieResource.delete({ id: id });
            };
            return MovieService;
        }());
        Services.MovieService = MovieService;
        angular.module('myapp').service('movieService', MovieService);
    })(Services = myapp.Services || (myapp.Services = {}));
})(myapp || (myapp = {}));
