/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------*/

jQuery(document).ready(function($) {
   $('.smoothscroll').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        // Check if target exists before accessing its properties
        if ($target.length) {
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 800, 'swing', function () {
                window.location.hash = target;
            });
        } else {
            console.error("Smooth Scroll Error: Target element '" + target + "' not found.");
        }
    });
});

/* Apply bg image */
document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const bgImage = header.getAttribute("data-bg");

    if (bgImage) {
        header.style.backgroundImage = `url('${bgImage}')`;
    }
});

/*----------------------------------------------------*/
/* YouTube Video Modal
------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  const videoModal = document.getElementById("videoModal");
  const closeVideoModal = document.getElementById("closeVideoModal");
  const videoButton = document.getElementById("videoBtn");
  const youtubeVideo = document.getElementById("youtubeVideo");
  
  // Open modal and start video with sound
  videoButton.addEventListener("click", () => {
    youtubeVideo.src = "https://www.youtube.com/embed/rG4xaEqA6I0?autoplay=1"; // Removed 'mute=1'
    videoModal.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // Prevent scrolling
  });

  // Close modal when clicking outside the iframe
  videoModal.addEventListener("click", (event) => {
    if (!event.target.closest("iframe")) {
      closeVideoModal.click();
    }
  });

  // Close modal when '×' is clicked
  closeVideoModal.addEventListener("click", () => {
    videoModal.classList.add("hidden");
    document.body.style.overflow = ""; // Restore scrolling
    youtubeVideo.src = ""; // Reset src to stop video playback
  });

  // Close modal using the ESC key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeVideoModal.click();
    }
  });
});

/*----------------------------------------------------*/
/* Quote Loop
------------------------------------------------------ */

function fade($ele) {
    $ele.fadeIn(1000).delay(3000).fadeOut(1000, function() {
        var $next = $(this).next('.quote');
        fade($next.length > 0 ? $next : $(this).parent().children().first());
   });
}
fade($('.quoteLoop > .quote').first());


/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */

$(window).scroll(function() {

    if ($(window).scrollTop() > 300) {
        $('.main_nav').addClass('sticky');
    } else {
        $('.main_nav').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.main_nav').removeClass('open-nav');
    } else {
        $('.main_nav').addClass('open-nav');
    }
});

$('.main_nav li a').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_nav').removeClass('open-nav');
    }
});

/*----------------------------------------------------*/
/* Gallery
------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = [
    "https://github.com/jamiepearson/chris-craigen-website/blob/master/assets/media/Solo/Solo%202.jpg?raw=true",
    "https://github.com/jamiepearson/chris-craigen-website/blob/master/assets/media/Krakens/Krakens%20Cover%20Photo.jpg?raw=true",
    "https://github.com/jamiepearson/chris-craigen-website/blob/master/assets/media/Casey%20Vox/casey%20vox-11.jpg?raw=true",
    "https://github.com/jamiepearson/chris-craigen-website/blob/master/assets/media/aris/aris.jpeg?raw=true"
  ];

  let currentIndex = 0;

  // Open modal and display the clicked image
  window.openModal = (index) => {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    currentIndex = index;
    modalImage.src = galleryImages[currentIndex];
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  // Close modal
  window.closeModal = () => {
    const modal = document.getElementById("imageModal");
    modal.classList.add("hidden");
    document.body.style.overflow = ""; // Restore scrolling
  };

  // Close modal by clicking outside the image
  window.clickOutsideModal = (event) => {
    const modalImage = document.getElementById("modalImage");
    if (!modalImage.contains(event.target)) {
      closeModal();
    }
  };

  // Navigate to the next image
  window.nextImage = () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    document.getElementById("modalImage").src = galleryImages[currentIndex];
  };

  // Navigate to the previous image
  window.prevImage = () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    document.getElementById("modalImage").src = galleryImages[currentIndex];
  };

  // Close modal using ESC key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    } else if (event.key === "ArrowRight") {
      nextImage();
    } else if (event.key === "ArrowLeft") {
      prevImage();
    }
  });
});

  
TweenMax.staggerFrom(".heading", 0.8, {opacity: 0, y: 20, delay: 0.2}, 0.4);
