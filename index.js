const btnClicked = () => {

  let navToggle = document.querySelector('.navbar-toggle');

  const navActive = () => {

    let navlist = document.querySelector('.nav-list');
    navlist.classList.toggle('active');
  }

  navToggle.addEventListener('click', navActive);
}

btnClicked();