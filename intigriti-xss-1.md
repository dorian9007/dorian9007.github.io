
# Intigriti January XSS Challenge - Solution
 This is a writeup of the XSS Challenge from Intigriti. I was not able to solve it completely in the given time, but got pretty far. It was interesting enough for me to do a writeup.

[https://challenge-0121.intigriti.io/](https://challenge-0121.intigriti.io/) <br>
[script.js](https://raw.githubusercontent.com/dorian9007/dorian9007.github.io/master/assets/intigriti1-script.js)

![Image](/assets/intigritixss.jpg)

> The solution…
> - Should work on the latest version of Firefox or Chrome
> - Should alert() the following flag: {THIS_IS_THE_FLAG}.
> - Should leverage a cross site scripting vulnerability on this page.
> - Shouldn’t be self-XSS or related to MiTM attacks
> - Should be reported at go.intigriti.com/submit-solution

<br>

### first things first:

At first glance the site doesnt seem to have anything special like inputs or other ordinary things that you might expect.
The only thing that might be interesting  is a 5 second delay when clicking on a link.
