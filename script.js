console.log("Hello!");
let contentDiv = document.getElementById("quote-destination");
let authorDiv = document.getElementById("author-destination");
let button = document.getElementById("btn-getquote");

button.addEventListener("mouseup", function(event) {
  event.preventDefault();
  let url = "https://api.quotable.io/random";
  fetch(url)
    .then(function(response) {
      // console.log(response);
      return response.json();
    })
    .then(function(json) {
      // console.log(json.quote);
      contentDiv.innerHTML = "&quot;" + json.content + "&quot;";
      authorDiv.innerHTML = "-" + json.author;
    });
});
