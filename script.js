function geturl() {
var xmlhttp = new XMLHttpRequest();
       xmlhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
           var myObj = JSON.parse(this.responseText);
           document.getElementById("iframe").src=myObj;
         }
       };
       xmlhttp.open("GET","https://jftp.github.io/website.redirect" + document.getElementById("urlbar").value +".json", true);
       xmlhttp.send();
     }
