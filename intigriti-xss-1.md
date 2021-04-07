
# Intigriti's January XSS Challenge - Solution
 This is a writeup of the XSS Challenge from Intigriti. I was not able to solve it completely in the given time, but got pretty far. It was interesting enough for me to do a writeup.

[challenge-0121.intigriti.io](https://challenge-0121.intigriti.io/) <br>
[script.js](https://raw.githubusercontent.com/dorian9007/dorian9007.github.io/master/assets/intigriti1-script.js) (or at end of page)

![Image](/assets/intigritixss.jpg)

> The solution…
> - Should work on the latest version of Firefox or Chrome
> - Should alert() the following flag: {THIS_IS_THE_FLAG}.
> - Should leverage a cross site scripting vulnerability on this page.
> - Shouldn’t be self-XSS or related to MiTM attacks
> - Should be reported at go.intigriti.com/submit-solution

<br>

### First things first:

At first glance the site doesn't seem to have anything special like inputs or other ordinary things that you might expect.
The only thing that might be interesting  is a 5 second delay when clicking on a link.

![Image](/assets/assets-intigriti/xss-screenshot1.jpg)


### Lets have a closer look🕵🏻‍♂️:

In line 2-3 we see a GET-Request check for the Parameter _"r"_.
The value of _"r"_ gets assigned to the property _"r"_ of the _window_ object.

```javascript
  2| window.href = new URL(window.location.href); 
  3| window.r = href.searchParams.get("r");
```




--------end---------
```javascript

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

```
https://holme-sec.medium.com/solution-for-intigritis-0121-challenge-1b59ab942d99
