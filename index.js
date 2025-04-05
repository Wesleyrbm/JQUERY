$(document).ready(function () {
    let currentIndex = 0;
    const images = $('.carousel img');
    const totalImages = images.length;
  
    function showImage(index) {
      images.removeClass('active').fadeOut(300);
      images.eq(index).addClass('active').fadeIn(300);
    }
  
    $('#next').click(function () {
      currentIndex = (currentIndex + 1) % totalImages;
      showImage(currentIndex);
    });
  
    $('#prev').click(function () {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      showImage(currentIndex);
    });
  
    // Mostrar a imagem inicial
    showImage(currentIndex);
  
    // Autoplay
    let autoSlide = setInterval(() => $('#next').click(), 3000);
  
    // Pausar ao passar o mouse
    $('.carousel').hover(
      function () {
        clearInterval(autoSlide);
      },
      function () {
        autoSlide = setInterval(() => $('#next').click(), 3000);
      }
    );
  });
  