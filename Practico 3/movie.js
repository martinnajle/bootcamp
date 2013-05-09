function Movie() {
  this.attributes={};
}

Movie.prototype = {
  constructor: Movie ,
  play : function() {
    var movieName= this.attributes['name'] || 'Movie undefined';
    console.log(movieName+' Now is playing...');
    return movieName +' Now is playing...';
  },
  stop: function() {
    var movieName= this.attributes['name'] || 'Movie undefined';
    console.log("Stopping the movie...");
    return movieName + " stopped, the movie...";
  },
  get:  function(key) {
    return this.attributes[key];
  },
  set:  function(key, value) {
  	this.attributes[key]=value;
  }
}

function Movie2() {
  //private
  var attributes = {};
  this.play = function () {
    var n = attributes['title'] || 'no name';
    console.log("playing");
    this.publish(n, 'playing');
  },
  this.stop = function () {
    var n = attributes['title'] || 'no name';
    this.publish(n, 'stopped');
  },
  this.set = function (attr, value) {
    attributes[attr] = value;
  },
  this.get = function (attr) {
    return attributes[attr] || 'attribute does not exist';
  }
};
