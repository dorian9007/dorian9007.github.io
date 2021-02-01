
  window.href = new URL(window.location.href);
  window.r = href.searchParams.get("r");
  //Remove malicious values from href, redirect, referrer, name, ...
  ["document", "window"].forEach(function(interface){
    Object.keys(window[interface]).forEach(function(globalVariable){
        if((typeof window[interface][globalVariable] == "string") && (window[interface][globalVariable].indexOf("javascript") > -1)){
            delete window[interface][globalVariable];
        }
    });
  });
  
  window.onload = function(){
    var links = document.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++){
      links[i].onclick = function(e){
        e.preventDefault();
        safeRedirect(e.target.href);
      }
    }
  }
  if(r != undefined){
    safeRedirect(r);
  }
  function safeRedirect(url){
    if(!url.match(/[<>"' ]/)){
      window.setTimeout(function(){
          if(url.startsWith("https://")){
            window.location = url;
          }
          else{ //local redirect
            window.location = window.origin + "/" + url;
          }
          window.setTimeout(function(){
            document.getElementById("error").style.display = "block";
          }, 1000);
      }, 5000);
      document.getElementById("popover").innerHTML = `
        <p>You're being redirected to ${url} in 5 seconds...</p>
        <p id="error" style="display:none">
          If you're not being redirected, click <a href=${url}>here</a>
        </p>.`;
    }
    else{
      alert("Invalid URL.");
    }
  }
