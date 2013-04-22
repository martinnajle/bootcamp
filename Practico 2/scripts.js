$(document).ready(function() {
    alert('Page has finished loading');

    $('#page1').keydown(function(e){
        if(e.which == 27){
            $.mobile.loading( 'hide' );
            console.log('stop spinner event invoked with ESC');
        }
    });
     loadTweets();
    });

    function highlight($id, name) {
        $id.html($id.text().replace(name, '<span class="highlight">'+name+'</span>'));
    }

    function loadTweets(){

      $.ajax({
          url: 'http://search.twitter.com/search.json?q=html5&rpp=5&include_entities=true&result_type=mixed',
          type: 'GET',
          dataType: 'jsonp',
          context: document.body,
          success: function(data) {
            $('.background').show();
            results = data.results;
            var $list = $('#tweetsList');
            $list.on('click', 'li',function(e){
               var currentItem= ($(this).attr('id')).split('_');
               $('#item').html('<img  width="200" height="150" src="' + results[currentItem[1]].profile_image_url +'"></img><p>'+results[currentItem[1]].text+'</p>');
                 
             });
            var tweet_data= ''; //"<h1>Tweets list</h1>";

                for (var i = 0; i < results.length; i++) {
                    tweet_data += '<li id="item_'+i+'"><a href="#dialogTweet" data-rel="dialog">Tweet (' + i + '): <br>';
                    tweet_data += 'From_user: ' + results[i].from_user + '<br>';
                    tweet_data += 'Text: ' + results[i].text + '<br>';
                    tweet_data += 'Created at: ' + results[i].created_at + '<br>';
                    tweet_data += '<img  src="' + results[i].profile_image_url +'"></img></a></li>';
                }
                $list.append(tweet_data);
          $('#tweetsList').listview('refresh'); // This line now updates the listview


          },
          error: function() {
            console.log('An error occurred in the service call');
          }
        })
    }
