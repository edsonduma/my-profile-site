const currentYear = new Date().getFullYear()
document.getElementById("current-year").innerHTML = new Date().getFullYear()
document.getElementById("for-year").innerHTML = (currentYear - 2016)

// ===== Scroll to Top ==== 
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
    $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
    $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function () {      // When arrow is clicked
  $('body,html').animate({
    scrollTop: 0                       // Scroll to top of body
  }, 500);
});

function mostrarCV(botao) {
  // alert('funcionou a modal')
  document.getElementById('modal-cv').style.display = 'block'
}