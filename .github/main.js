console.log("yo..!");
console.log($("h1"));
console.log("Hello World ...");
console.log($("h2"));

$.get("https://api.github.com/users/k33g").then((data) => {
  console.log(data);
  $("h5").html(data.avatar_url)
});

let content=`<a href="/k33g/cuckoo/help" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /k33g/cuckoo/wiki">
      <svg aria-hidden="true" class="octicon octicon-octoface" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg>
      🐦 Cuckoo Help
</a>`;

$('nav').first().append(content)

console.log("Hello ... append something")
