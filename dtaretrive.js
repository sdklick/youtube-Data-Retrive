//First code
var scroll = setInterval(function(){ window.scrollBy(0, 1000)}, 1000);

//Second code (Updated):

window.clearInterval(scroll); console.clear();
urls = $$('a');let myarr1=[];
urls.forEach(function(v,i,a){if (v.id=="video-title-link")
{myarr1.push({title:v.title,vlink:v.href})}});console.log(myarr1);