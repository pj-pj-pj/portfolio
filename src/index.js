import overviewInit from './overview';
import projInit from './projects';
import resumeInit from './resume';
import contactInit from './contact';

const container = document.querySelector('main #content #container');
const navBtns = document.querySelectorAll('.nav-btn');

navBtns.forEach((section) => {
  section.addEventListener('click', () => {
    document
      .querySelector('p.active-section')
      .classList.remove('active-section');
    section.querySelector('p').classList.add('active-section');
  });
});

document.querySelector('header p').addEventListener('click', (e) => {
  unchild(container);
  overviewInit();
});

document.querySelector('#overview-btn').addEventListener('click', (e) => {
  unchild(container);
  overviewInit();
});

document.querySelector('#projects-btn').addEventListener('click', () => {
  unchild(container);
  projInit();
});

document.querySelector('#resume-btn').addEventListener('click', () => {
  unchild(container);
  resumeInit();
});

document.querySelector('#contact-btn').addEventListener('click', () => {
  unchild(container);
  contactInit();
});

function unchild(parent) {
  var child = parent.firstChild;
  while (child) {
    child.remove();
    child = parent.firstChild;
  }
}

overviewInit();
