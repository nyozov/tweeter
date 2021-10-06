/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function() {
    const tweetData = [{
            "user": {
                "name": "Newton",
                "avatars": "https://i.imgur.com/73hZDYK.png",
                "handle": "@SirIsaac"
            },
            "content": {
                "text": "If I have seen further it is by standing on the shoulders of giants"
            },
            "created_at": 1461116232227
        },
        {
            "user": {
                "name": "Descartes",
                "avatars": "https://i.imgur.com/nlhLi3I.png",
                "handle": "@rd"
            },
            "content": {
                "text": "Je pense , donc je suis"
            },
            "created_at": 1461113959088
        }
    ];






    const createTweetElement = function(data) {
        let $tweet = `<article>
    <header class ="user">
      <div class="name-div">
      <img src=${data.user.avatars}> 
      <label for= "user-img">${data.user.name}</label>
      </div>
      <p class="user-tag">${data.user.handle}</p>

    </header>
    <p class="tweet-example">${data.content.text}</p>
    <footer>
      <p>${timeago.format(new Date())}</p>
      <div class="fontawesome-tags">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>


      </div>
      
    </footer>
  </article>`;

        return $tweet;

    };


    const renderTweets = function(tweets) {
        for (let tweet of tweets) {
            $('#tweets-container').prepend(createTweetElement(tweet));
        }
    };


    // Test / driver code (temporary)
    renderTweets(tweetData);


});