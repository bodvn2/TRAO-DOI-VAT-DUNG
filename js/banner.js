// Thay đổi thời gian chuyển ảnh (mặc định là 5 giây)
var myCarousel = document.querySelector("#carouselExample");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000, // 3 giây
  pause: false, // Không dừng khi hover
});

// Chuyển ảnh khi click vào slide
document.querySelectorAll(".carousel-inner img").forEach((img) => {
  img.addEventListener("click", () => {
    carousel.next();
  });
});
