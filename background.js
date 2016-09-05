let splittedRepoPath = window.location.pathname.split("/");
// test undefined, location github, etc ... or Result Type

let branch = splittedRepoPath[3] == "tree" && splittedRepoPath[4]!=="master"
? `tree/${splittedRepoPath[4]}` : "master" //no branch name with "/"

let ghPath = window.location.hostname=="github.com"
  ? `https://raw.githubusercontent.com/${splittedRepoPath[1]}/${splittedRepoPath[2]}`
  : `${window.location.origin}/raw/${splittedRepoPath[1]}/${splittedRepoPath[2]}`

console.log("ghPath:", ghPath);
let scripts = [];
$.get(`${ghPath}/${branch}/.github/2.load.js`).then((data)=>{
  eval(data); // list of scripts to load

  console.log("🤖 libraries to load:",libs)
  libs.forEach((lib) => { // load each script source
    $.get(`${ghPath}/${branch}/.github/${lib}`).then((data)=>{
      scripts.push({name:lib, src:data})
      // when all script sources are loaded
      if(scripts.length==libs.length) {
        console.log("😃 All sources are loaded")
        // insert each script in the good order
        libs.forEach((lib) => {
          let scriptToInsert = scripts.find((script) => {
            return script.name == lib
          })
          console.log("🐼 insert:", scriptToInsert.name)
          let libScript = document.createElement('script');
          libScript.innerText = scriptToInsert.src;
          document.head.appendChild(libScript);

        })
        console.log("🚀 All scripts are inserted")
      }
    })
  })
});
