console.log("yo..!");
console.log($("h1"));
console.log("Hello World ...");
console.log($("h2"));

$.get("https://api.github.com/users/k33g").then((data) => {
  console.log(data);
  $("h5").html(data.avatar_url)
});

let content=`<a href="/k33g/cuckoo/help" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /k33g/cuckoo/wiki">
      <svg aria-hidden="true" class="octicon octicon-octoface" height="16" version="1.1" viewBox="0 0 16 16" width="16"></svg>
      🐼 Help
</a>`;

$('nav').first().append(content)
