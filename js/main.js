let skillbar = document.getElementsByClassName("skills__bar");
let skillbarMax = [95, 70, 80, 60, 99, 95];
let done = true;

let frame = function() {
  done = true;
  let id = setInterval(frame, 150);
  let bar;
  for (let i = 0; bar = skillbar.item(i); i++) {
    let value = parseInt(bar.getAttribute("value"));
    if (value < skillbarMax[i]) {
      bar.setAttribute('value', value + 1);
      done = false;
    }
  }
  if (done) {
    clearInterval(id);
  }
}

let countNum = document.getElementsByClassName('stats__number');
let statsMax = [10, 120, 10];

let count = function() {
  done = true;
  let id = setInterval(count, 200);
  let num;
  for (let i = 0; num = countNum.item(i); i++) {
    let value = parseInt(num.innerHTML);
    if (value < statsMax[i]) {
      num.innerHTML = value + 1;
      done = false;
    }
  }
  if (done) {
    clearInterval(id);
  }
}

let isInViewport = function(el) {
  let bounding = el.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

window.addEventListener('scroll', function() {
  if (isInViewport(document.getElementsByClassName('skills__bar')[0])) {
    frame();
  }
})

window.addEventListener('scroll', function() {
  if (isInViewport(document.getElementsByClassName('stats__number')[0])) {
    count();
  }
})

let navList = document.getElementById('nav-list');
let menuToggle = function() {
  if (window.scrollY >= 100) {
    navList.classList.toggle('is-toggled');
  } else {
    navList.classList.toggle('is-toggled');
    navbar.classList.toggle('is-scrolled');
    navbar.classList.remove('box-shadow');
  }
}

document.getElementById('menu').addEventListener('click', menuToggle);

let hamburger = document.getElementById('menu');
let hamburgerToggle = function() {
  document.getElementById('top').classList.toggle('top-active');
  document.getElementById('mid').classList.toggle('mid-active');
  document.getElementById('bottom').classList.toggle('bottom-active');
}

hamburger.addEventListener('click', hamburgerToggle);

let navbar = document.getElementById('nav');
let upIcon = document.getElementById('up');
window.addEventListener('scroll', function() {
  if (window.scrollY >= 100) {
  navbar.classList.add('is-scrolled', 'box-shadow');
  upIcon.classList.add('is-toggled-post');
} else if (navList.classList.contains('is-toggled')) {

} else {
  navbar.classList.remove('is-scrolled', 'box-shadow');
  upIcon.classList.remove('is-toggled-post');

}
}
)

navList.addEventListener('click', function() {
  navList.classList.remove('is-toggled');
  navbar.classList.remove('is-scrolled');
  hamburgerToggle();
})

let blogPost = document.getElementsByClassName('blog__post');
let blogOverlay = document.getElementsByClassName('blog__post--overlay')
let thumb = document.getElementsByClassName('blog__thumbnail');
for (let i = 0; i < blogPost.length; i++) {
  blogPost[i].addEventListener('click', function() {
    thumb[i].classList.toggle('is-hovered')
    blogOverlay[i].classList.toggle('is-toggled-post');
    }

)
}
