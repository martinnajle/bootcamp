function Movie() {
   var attributes={};
   this.play = function(){
     var movieName= attributes['name'] || 'Movie undefined';
     console.log(movieName+' Now is playing...');
     return movieName +' Now is playing...';
   };
   this.stop = function(){
    var movieName= attributes['name'] || 'Movie undefined';
   	console.log("Stopping the movie...");
    return movieName + " stopped, the movie...";
   };
   this.get = function(key){
     return attributes[key];
   };
   this.set = function(key, value){
   	 attributes[key]=value;
   };
}