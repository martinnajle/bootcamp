 var MovieObserver = {
      addSubscriber:function (callback, fn) {
        this.subscribers[this.subscribers.length] = [fn, callback];
      },
      removeSubscriber:function (callback, fn) {
        for (var i = 0; i < this.subscribers.length; i++) {
          if (this.subscribers[i][0] === fn && this.subscribers[i][1] === callback) {
          delete(this.subscribers[i]);
          }
        }
      },
      publish:function (which, fn) {
        for (var i = 0; i < this.subscribers.length; i++) {
          if (typeof this.subscribers[i][1] === 'function' && this.subscribers[i][0] === fn) {
            this.subscribers[i][1](which);
          }
        }
      },
      make:function (o) { // turns an object into a publisher
        for (var i in this) {
          o[i] = this[i];
          o.subscribers = [];
        }
      }
    };
    aMovie= new Movie2();
    MovieObserver.make(aMovie);
    aMovie.set('country','Argentina');
    aMovie.set('title','Mingo y Anibal contra los fantasmas'); 
    console.log(aMovie);

    var play_listener = {
      play_listen:function (which) {
        console.log('Playing movie '+ which)
      },
      stop_listen:function (which) {
        console.log('Stopped playing movie ' + which)
      }
    };


    aMovie.addSubscriber(play_listener.play_listen, 'playing');
    aMovie.addSubscriber(play_listener.stop_listen, 'stopped');
    aMovie.play();
    aMovie.stop();