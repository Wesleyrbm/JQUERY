$(document).ready(function() {
    let currentIndex = 0;
    let images = $('.carousel img');
    let totalImages = images.length;

    if (totalImages === 0) return;

    function showImage(index) {
        images.removeClass('active').fadeOut(300);
        images.eq(index).addClass('active').fadeIn(300);
    }

    $('#next').click(function() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    });

    $('#prev').click(function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    });

    let autoSlide = setInterval(function() {
        $('#next').click();
    }, 3000);

    $('.carousel').hover(
        function() { clearInterval(autoSlide); },
        function() { autoSlide = setInterval(() => $('#next').click(), 3000); }
    );
});
