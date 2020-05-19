function geturl() {
  console.log('Request Started')
  var dns = document.getElementById("dns");
  var url = document.getElementById("urlbar").value;
  var frame = document.getElementById("viewport");
  if(dns.value!=''){
    dnsserver = 'https://jtechnologies.github.io/Extended-Internet-Protocol/dns/';
  } else {
    dnsserver = dns.value;
  }
var xmlhttp = new XMLHttpRequest();
       xmlhttp.onreadystatechange = function() {
         if(this.readyState == 4 && this.status == 200){
           var response = JSON.parse(this.responseText);
           frame.src=response;
           console.log("Request Completed with 200");
       };
      xmlhttp.open("GET",dnsserver + url + '.json', true);
      xmlhttp.send();
      console.log("Request Sent")
}
}