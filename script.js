function getpage() {
 var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            document.getElementById("maindis").src=myObj;
          }
        };
        xmlhttp.open("GET","https://jbrow78.github.io/jttpsites/" document.getElementById("urlbar").value +".json", true);
        xmlhttp.send();
      }
}