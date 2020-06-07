function geturl() {
  console.log('Request Started')
  var dns = document.getElementById("dns");
  var url = document.getElementById("urlbar").value;
  var frame = document.getElementById("viewport");
  if(dns.value==''){
    dnsserver = 'https://jtechnologies.github.io/Extended-Internet-Protocol/dns/';
  } else {
    dnsserver = dns.value;
  }
var xmlhttp = new XMLHttpRequest();
       xmlhttp.onreadystatechange = function() {
         console.log(this.status)
         if(this.readyState == 4 && this.status == 200){
           var response = JSON.parse(this.responseText);
           frame.src=response;
           console.log("Request Completed with 200");
       };
         if(this.readyState == 4 && this.status == 404){
           console.log("Website Not Found");
           frame.src='404.html'
       };
       }
      xmlhttp.open("GET",dnsserver + url + '.json', true);
      xmlhttp.send();
      console.log("Request Sent");
}
function setup(){
  var dns = document.getElementById("dns");
  var urlbar = document.getElementById("urlbar");
  var frame = document.getElementById("viewport");
  if (typeof url === "undefined") {
    url = 'home';
  } else {
    urlbar.value = url;
  }
    if (typeof dnsserver === "undefined") {
    dnsserver = 'https://jtechnologies.github.io/Extended-Internet-Protocol/dns/';
  } else {
    dns.value = dnsserver;
  }
  var xmlhttp = new XMLHttpRequest();
       xmlhttp.onreadystatechange = function() {
         console.log(this.status)
         if(this.readyState == 4 && this.status == 200){
           var response = JSON.parse(this.responseText);
           frame.src=response;
           console.log("Request Completed with 200");
       };
         if(this.readyState == 4 && this.status == 404){
           console.log("Website Not Found");
           frame.src='https://Extended-Internet-Protocol.velocitydev.repl.co/404.html'
       };
       }
      xmlhttp.open("GET",dnsserver + url + '.json', true);
      xmlhttp.send();
      console.log("Request Sent");
}