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

  //$('h1')[1].html("WOW!")

  $("body").append('<cuckoo>🐥</cuckoo>');
  $("cuckoo").append("<p>Hello 🌏</p>")

  console.log("🤖 libraries to load:",libs)
  libs.forEach((lib) => { // load each script source
    $.ajax({url:`${ghPath}/${branch}/.github/${lib}`, dataType: 'text', cache: false}).then((data)=>{
      //console.log(lib)


      scripts.push({name:lib, src:data})

      // when all script sources are loaded
      if(scripts.length==libs.length) {
        console.log("😃 All sources are loaded")

        // eval each script in the good order
        libs.forEach((lib) => {
          let scriptToEval = scripts.find((script) => {
            return script.name == lib
          })
          console.log("🐼 eval:", scriptToEval.name)
          $(function(){ eval(scriptToEval.src) });
        })
        console.log("🚀 All scripts are evaluated")

        // insert each script in the good order
        /*
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
        */


      }
    })
  })
});
