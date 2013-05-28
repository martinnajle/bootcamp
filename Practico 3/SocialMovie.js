function DownloadableMovie() {
  this.download = function () {
    var n = this.get('name') || 'no name';
    console.log('Downloading movie...' + n);
  };
};
DownloadableMovie.prototype = new Movie();

downloadable_movie = new DownloadableMovie();
downloadable_movie.set('name', 'Spiderman');
downloadable_movie.get('name');
downloadable_movie.download();
console.log(downloadable_movie.hasOwnProperty('play'));
console.log(downloadable_movie.hasOwnProperty('download'));


var Social = {
  share:function(friendName) {
    console.log('Sharing ' + this.get('name') + ' with ' + friendName);
  },
  like:function() {
    console.log('Like');
  }
};
function extend(destination, source) {
  console.log("source: "+source);
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}


console.log(Movie.prototype);
extend(Movie.prototype, Social);
social_movie = new Movie();
social_movie.share('Pepe');
console.log(social_movie);

var Actor = function (name) {
  this.name = name;
  this.performs = function() {
    console.log('Ohhh my love, where are you, and blah blah');
  }
}
a1 = new Actor('Jennifer Aniston');
a2 = new Actor('Maria Leal');
Movie.prototype.actors = [];
Movie.prototype.addActors = function(actors) {
   this.actors=actors;
};
movieActors = new Movie();
movieActors.set('title', 'Who');
movieActors.addActors([a1,a2]);
console.log(movieActors);

