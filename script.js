var events = ['Holiday Test-10/23/2022','Holiday2 Test-09/30/2022','Holiday Test3-11/23/2022'];
function event() {
  document.getElementById('event').innerHTML += "<h1>Events</h1>";
  var events2 = events.slice();
  for (var o = 0;o < events2.length-1;o++) {
    for (var t = 0;t < events2.length-1;t++) {
      var bill = events2[t];
    var newlist = bill.split("-");
    var date1 = new Date();
    var date2 = new Date(newlist[1]);
    var tt = (date2.getTime() - date1.getTime())/(1000 * 3600 * 24);
    var bill2 = events2[t+1];
    var newlist2 = bill2.split("-");
    var date12 = new Date();
    var date22 = new Date(newlist2[1]);
    var tt2 = (date22.getTime() - date12.getTime())/(1000 * 3600 * 24);
      if (tt > tt2 && (t+1) < events2.length) {
        var first = events2[t+1];
        events2[t+1] = events2[t];
        events2[t] = first;
      }
    }
  }
  for (var i = 0; i < events2.length;i++) {
    var newlist = events2[i].split("-");
    document.getElementById('event').innerHTML += "<div><h3>"+newlist[0]+" - <i style='color:red;'>"+newlist[1]+"</i></h3></div>";
  }
  document.getElementById('event').innerHTML += "";
}
event();
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
setInterval(function(){
  plusSlides(1);
},5000);