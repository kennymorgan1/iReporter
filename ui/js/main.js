window.onload = () => {
  document.getElementById('toggleNav').addEventListener('click', () => {
    const show = document.querySelector('.header-nav ul');
    show.classList.toggle('open');
  });

  document.querySelector('.tr').addEventListener('click', () => {
    window.location = 'edit.html';
  });

  document.querySelector('.tr1').addEventListener('click', () => {
    window.location = 'edit.html';
  });

  document.querySelector('.tr2').addEventListener('click', () => {
    window.location = 'edit.html';
  });

  document.querySelector('.tr3').addEventListener('click', () => {
    window.location = 'edit.html';
  });

  document.querySelector('.tr4').addEventListener('click', () => {
    window.location = 'edit.html';
  });

  document.querySelector('.tr5').addEventListener('click', () => {
    window.location = 'edit.html';
  });
};
