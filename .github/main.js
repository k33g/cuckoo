console.log("yo..!");
console.log($("h1"));
console.log("Hello World ...");
console.log($("h2"));

$.get("https://api.github.com/users/k33g").then((data) => {
  console.log(data);
  $("h5").html(data.avatar_url)
  $('h5').append("<p>Hello World</p>")
});


