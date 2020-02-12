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
  
  window.onload = function() {
    console.log('Hello');
    numberTheSlides();
    prevNextLinks();
  };
  