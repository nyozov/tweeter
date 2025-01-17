// A client-side Single Page App (SPA)
// Communicates with a server via AJAX

$(document).ready(function () {
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  $("#error").hide();

  const createTweetElement = function (data) {
    let $tweet = `<article>
    <header class ="user">
      <div class="name-div">
      <img src=${data.user.avatars}> 
      <label for= "user-img">${data.user.name}</label>
      </div>
      <p class="user-tag">${data.user.handle}</p>
    </header>
    <p class="tweet-example">${escape(data.content.text)}</p>
    <footer>
      <p>${timeago.format(data.created_at)}</p>
      <div class="fontawesome-tags">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
      
    </footer>
  </article>`;

    return $tweet;
  };

  const renderTweets = function (tweets) {
    const $tweetsContainer = $(`#tweets-container`);
    $tweetsContainer.empty();
    for (let tweet of tweets) {
      $tweetsContainer.prepend(createTweetElement(tweet));
    }
  };

  const loadTweets = function () {
    $.ajax({
      url: "/tweets",
      method: "GET",
      dataType: "json",
      success: (tweets) => {
        renderTweets(tweets);
      },
      error: (err) => {
        console.log(`there was an error: ${err}`);
      },
    });
  };

  loadTweets();

  $("#tweet-form").submit(function (event) {
    event.preventDefault();

    let tweetLength = $("#tweet-text").val().length;
    if (tweetLength > 140) {
      $("#error").text("❗️ Your tweet has too many characters");
      $("#error").slideDown();
      return;
    }
    if (!tweetLength) {
      $("#error").text("❗️ Your tweet is empty");
      $("#error").slideDown();
      return;
    }
    $("#error").slideUp();

    const serData = $(this).serialize();
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: serData,

      error: (err) => {
        console.log(`there was an error: ${err}`);
      },
    }).then(function () {
      loadTweets();
      $("#tweet-text").val("");
      $(".counter").val(140)
    });
  });
});
