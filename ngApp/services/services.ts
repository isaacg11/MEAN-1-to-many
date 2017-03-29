namespace myapp.Services {
  export class UserService {
    public LoginResource
    public SignUpResource

    public registerUser(userObj) {
      return this.SignUpResource.save(userObj).$promise;
    }

    public loginUser(userInfo) {
      return this.LoginResource.save(userInfo).$promise;
    }

    constructor(private $resource:ng.resource.IResourceService){
      this.LoginResource = this.$resource('/userRoutes/api/Login/Local');
      this.SignUpResource = this.$resource('/userRoutes/api/Register');
    }

  }

  angular.module('myapp').service('userService', UserService);

  export class MovieService {
    public MovieResource

    public saveMovie(movie) {
      return this.MovieResource.save(movie);
    }

    public getMovies(id) {
      return this.MovieResource.query({id: id});
    }

    public removeMovie(id) {
      return this.MovieResource.delete({id: id});
    }

    public constructor(
      public $resource
    ) {
      this.MovieResource = $resource('/api/movies/:id');
    }
  }

  angular.module('myapp').service('movieService', MovieService);
}
