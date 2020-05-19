function geturl() {
  var dns = document.getElementById("dns");
  var url = document.getElementById("urlbar").value;
  var frame = document.getElementById("viewport");
  if(dns.value!=''){
    dnsserver = 'https://jtechnologies.github.io/Extended-Internet-Protocol/dns/';
  } else {
    dnsserver = dns.value;
  }
  var xmlhttp = new XMLHttpRequest();
           frame.src=myObj;
         }
       };
       xmlhttp.open("GET",dnsserver+url+'.json', true);
       xmlhttp.send();
     }
}