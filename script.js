//About Overlay On

function on() {
  if (x.matches) {
  // Mobile
  document.getElementById('CVinfoMobile').style.display = 'block'
  document.getElementById('statement').style.display = 'flex'
  document.getElementById('infoDropdown').style.display = 'none'
  } else {
  //Desktop
  document.getElementById('statement').style.display = 'flex'
  document.getElementById('infoDropdown').style.display = 'flex'
  // document.getElementById('Info').style.textDecoration = 'underline'
  document.getElementById('CVinfo').style.display = 'block'
  document.getElementById('CVinfoMobile').style.display = 'none'
  // document.getElementById('AboutText').style.display = 'block'
    document.getElementById('MainContainer').style.overflowY = 'visible';
}
}

// About Overlay Off
function off() {
  if (x.matches) {
  // Mobile
  document.getElementById('CVinfo').style.display = 'none'
  document.getElementById('statement').style.display = 'none'
  document.getElementById('infoDropdown').style.display = 'none'
  } else {
  //Desktop
  document.getElementById('statement').style.display = 'flex'
  document.getElementById('infoDropdown').style.display = 'none'
  document.getElementById('Info').style.textDecoration = 'none'
  document.getElementById('CVinfo').style.display = 'none'
  document.getElementById('CVinfoMobile').style.display = 'none'
  // document.getElementById('AboutText').style.display = 'none'
}
}

function statement() {
  document.getElementById('statement').style.display = 'flex'
  document.getElementById('infoDropdown').style.display = 'none'
    document.getElementById('MainContainer').style.overflowY = 'hidden';
}


var x = window.matchMedia("(max-width: 800px)")
on(x) // Call listener function at run time
x.addListener(on) // Attach listener function on state changes


// function copyText() {
//   // get the container
//   const element = document.querySelector('#Email');
//   // Create a fake `textarea` and set the contents to the text
//   // you want to copy
//   const storage = document.createElement('textarea');
//   storage.value = element.innerHTML;
//   element.appendChild(storage);
//
//   // Copy the text in the fake `textarea` and remove the `textarea`
//   storage.select();
//   storage.setSelectionRange(0, 99999);
//   document.execCommand('copy');
//   element.removeChild(storage);
// }

let text = document.getElementById('TextArea').innerHTML;
const email = document.querySelector('#emailText')

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
      changeText1();
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  function changeText1() {
    email.innerHTML = '<h4>(copied)</h4>';
  }

  function changetext2(){
    email.innerHTML = '<h4>lillymuffitmay(at)gmail.com</h4>';
  }

// function changeText() {
//   email.insertAdjacentHTML('beforeEnd', '<h4>(copied)</h4>');
// }
  // const div = document.getElementById('Email');
  // const content = document.createTextNode('(copied)');
  // div.append(content);


  // const content = document.createTextNode('(copied)');
  // const newText = `<h4>(copied)</h4>`
  // const email = document.querySelector('#Email')
  // email.innerHTML = newText


// document.getElementsById('backgroundVideo')[0].onended = function () {
//   this.load();
//   this.play();
// };

// attempt to hide statement in modbile when slide active

// function myFunction(x) {
//   if (x.matches; ) { // If media query matches
//     document.body.style.backgroundColor = "yellow";
//
//   } else {
//     document.body.style.backgroundColor = "pink";
//   }
// }
//
// var x = window.matchMedia("(max-width: 800px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes



// Copy Email

// let text = document.getElementById('emailCopy').innerHTML;
//   const copyContent = async () => {
//     try {
//       await navigator.clipboard.writeText(text);
//       console.log('Content copied to clipboard');
//     } catch (err) {
//       console.error('Failed to copy: ', err);
//     }
//   }



// function copyText() {
  // Get the text field
  // var copyText = document.getElementById('Email');
  // Select the text field
  // copyText.select();
  // copyText.setSelectionRange(0, 99999); // For mobile devices
  // navigator.clipboard.writeText(copyText.value);
  // Alert the copied text
//   alert("Copied the text: " + copyText.value);
// }


//Slideshow setup
let sliderImages = document.querySelectorAll('.slide'),
  prevImage = document.querySelector('#PrevImage'),
  nextImage = document.querySelector('#NextImage'),
  // exitImage = document.querySelector('#cross'),
  current = 0;


// console.log(sliderImages.length);
// console.log(current);

function blackBG() {
    document.getElementById("BlackOverlay").style.display = 'block';
}

function whiteBG() {
    document.getElementById("BlackOverlay").style.display = 'none';
}

//Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none'
  }
}
//
// sliderImages.addEventListener.reset();
// sliderImages.addEventListener('keydown',reset())
// onkeydown = reset()

// Initialise Slider

function stopSlide() {
  reset();
  sliderImages[0].style.display = 'none',
  // document.getElementById('PrevImage').style.display = 'none',
  // document.getElementById('NextImage').style.display = 'none',
  // nextImage.style.display = 'none',
  prevImage.style.pointerEvents = 'none',
  nextImage.style.pointerEvents = 'none',
  document.getElementById('SelectedWork').style.pointerEvents = 'all',
  document.getElementById('cross').style.display = 'none',
  whiteBG ();
  current = 0;
}

function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
  prevImage.style.pointerEvents = 'all',
  nextImage.style.pointerEvents = 'all',
  document.getElementById('SelectedWork').style.pointerEvents = 'none',
  document.getElementById('cross').style.display = 'block';
  document.getElementById('MainContainer').style.overflowY = 'hidden';

}

function prevSlide() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

function nextSlide() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

//
prevImage.addEventListener('click', function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  console.log(current);
  if (current > 7) {
    blackBG();
  }
  if (current < 8) {
    whiteBG()
  }
  if (current > 8) {
    whiteBG();
  }
  prevSlide();
});


nextImage.addEventListener('click', function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }

  //current slide
  console.log(current);
  if (current > 5) {
    blackBG();
  }
  if (current < 6) {
    whiteBG()
  }
  if (current > 6) {
    whiteBG()
  }
  nextSlide();
});

stopSlide();

off();
statement();
