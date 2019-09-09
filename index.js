const navButtonSights = document.querySelector('.nav-button-sights');
const navButtonAbout = document.querySelector('.nav-button-about');
const navButtonVisit = document.querySelector('.nav-button-visit');
const navButtonClose = document.querySelector('.button-close');

const navOpenSights = document.querySelector('.nav-open-sights');
const navOpenAbout = document.querySelector('.nav-open-about');
const navOpenVisit = document.querySelector('.nav-open-visit');

const tl = new TimelineLite({ paused: true, reversed: true });

tl.to('.cover', 0.7, {
  width: '70%',
  ease: Power2.easeOut
})
  .to(
    'nav',
    0.7,
    {
      height: '100%',
      ease: Power2.easeOut
    },
    '-=0.5'
  )
  .fromTo(
    '.nav-open-sights',
    0.5,
    {
      opacity: '0',
      x: '50',
      ease: Power2.easeOut
    },
    {
      opacity: '1',
      x: '0',
      onComplete: function() {
        navOpenSights.getElementsByClassName.pointerEvents = 'auto';
      }
    }
  )
  .fromTo(
    '.button-close',
    0.3,
    {
      opacity: '0',
      y: '50',
      ease: Power2.easeOut
    },
    { opacity: '1', y: '0' }
  );

// Second Timeline for About Button

const tl1 = new TimelineLite({ paused: true, reversed: true });

tl1
  .to('.cover', 0.7, {
    width: '70%',
    ease: Power2.easeOut
  })
  .to(
    'nav',
    0.7,
    {
      height: '100%',
      ease: Power2.easeOut
    },
    '-=0.5'
  )
  .fromTo(
    '.nav-open-about',
    0.5,
    {
      opacity: '0',
      x: '50',
      ease: Power2.easeOut
    },
    {
      opacity: '1',
      x: '0',
      onComplete: function() {
        navOpenAbout.getElementsByClassName.pointerEvents = 'auto';
      }
    }
  )
  .fromTo(
    '.button-close',
    0.3,
    {
      opacity: '0',
      y: '50',
      ease: Power2.easeOut
    },
    { opacity: '1', y: '0' }
  );

// Third Timeline for About Button

const tl2 = new TimelineLite({ paused: true, reversed: true });

tl2
  .to('.cover', 0.7, {
    width: '70%',
    ease: Power2.easeOut
  })
  .to(
    'nav',
    0.7,
    {
      height: '100%',
      ease: Power2.easeOut
    },
    '-=0.5'
  )
  .fromTo(
    '.nav-open-visit',
    0.5,
    {
      opacity: '0',
      x: '50',
      ease: Power2.easeOut
    },
    {
      opacity: '1',
      x: '0',
      onComplete: function() {
        navOpenVisit.getElementsByClassName.pointerEvents = 'auto';
      }
    }
  )
  .fromTo(
    '.button-close',
    0.3,
    {
      opacity: '0',
      y: '50',
      ease: Power2.easeOut
    },
    { opacity: '1', y: '0' }
  );

// Timeline for the Close Button

// const tl3 = new TimelineLite({ paused: true, reversed: true });

// tl3
//   .to('.nav-open-sights', 0.5, {
//     opacity: '0',
//     y: '50',
//     ease: Power2.easeOut
//   })
//   .to(
//     'nav',
//     0.5,
//     {
//       height: '20%',
//       ease: Power2.easeOut
//     },
//     '-=0.3'
//   )
//   .to('.cover', 0.5, {
//     width: '100%',
//     ease: Power2.easeOut
//   });

navButtonClose.addEventListener('click', () => {
  // tl3.play();
  if (!tl.reversed()) {
    tl.reverse();
  } else if (!tl1.reversed()) {
    tl1.reverse();
  } else if (!tl2.reversed()) {
    tl2.reverse();
  }
});

navButtonSights.addEventListener('click', e => {
  if (tl.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
  // toggleTween(tl);
  checkActive(tl, tl1, tl2);
});

navButtonAbout.addEventListener('click', e => {
  if (tl1.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
  // toggleTween(tl1);
  checkActive(tl1, tl, tl2);
});

navButtonVisit.addEventListener('click', e => {
  if (tl2.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
  // toggleTween(tl2);
  checkActive(tl2, tl, tl1);
});

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}

function checkActive(tween, tween1, tween2) {
  if (!tween1.reversed()) {
    tween1.reverse(-2);
  } else if (!tween2.reversed()) {
    tween2.reverse(-2);
  }
  toggleTween(tween);
}
