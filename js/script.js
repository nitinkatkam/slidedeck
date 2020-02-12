function numberTheSlides() {
  var slides = document.querySelectorAll('main > section');
  for (var i=0; i<slides.length; i++) {
    slides[i].id = 'slide-'+(i+1);
  }
  if (slides.length>0) {
    location.href='#slide-1'; //make the first slide the target
  }
}

function prevNextLinks() {
  var slides = document.querySelectorAll('main > section');
  for (var i=0; i<slides.length; i++) {
    prevLink = document.createElement('a');
    prevLink.href = '#slide-'+i;
    prevLink.innerText = 'Prev';

    nextLink = document.createElement('a');
    nextLink.href = '#slide-'+(i+2);
    nextLink.innerText = 'Next';

    navDiv = document.createElement('div');
    navDiv.className = 'slide-nav'

    if (i>0) navDiv.appendChild(prevLink);
    if (i>0 && i<slides.length-1) navDiv.appendChild(
      document.createTextNode(" - ")
    );
    if (i<slides.length-1) navDiv.appendChild(nextLink);

    slides[i].appendChild(navDiv);
  }
}

function getSlideCount() {
  slides = document.querySelectorAll('main > section');
  return slides.length;
}

function getCurrentSlideNo() {
  target = document.querySelector(':target');
  targetId = target.id;
  slideNo = parseInt(targetId.substring(targetId.indexOf('-')+1, targetId.length));
  return slideNo;
}

function goToSlideOffset(offset) {
  slideNo = getCurrentSlideNo();
  if (0 < slideNo+offset && slideNo+offset <= getSlideCount()) {
    location.href='#slide-'+(slideNo+offset);
  } else {
    // console.log('slideNo: '+slideNo);
    // console.log('offset: '+offset);
    // console.log('slideCount: '+getSlideCount());
  }
}

function hookupCursorEvents() {
  document.addEventListener('keyup', function(event) {
    if (event.code == 'ArrowLeft') {
      goToSlideOffset(-1);
    } else
    if (event.code == 'ArrowRight') {
      goToSlideOffset(1);
    }
    // console.log(event.code);
  });
}

window.onload = function() {
  numberTheSlides();
  prevNextLinks();
  hookupCursorEvents();
};

