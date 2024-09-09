import "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
function test(){
  document.querySelectorAll("a").forEach(a=>{
    a.addEventListener('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
            window.location.hash = hash;
          });
        }
      });
  })
}
export default test