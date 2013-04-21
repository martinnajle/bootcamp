function Movie() {
   var attributes={};
   this.play = function(){
     var movieName= attributes['name'] || 'Movie undefined';
     console.log(movieName+' Now is playing...');
   };
   this.stop = function(){
   	console.log("Stopping the movie...");
   };
   this.get = function(key){
     return attributes[key];
   };
   this.set = function(key, value){
   	 attributes[key]=value;
   };
}