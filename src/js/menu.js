(function() {
  let menuContainer = document.querySelector('.js-menu-adapt');
  let menu = document.querySelector('.js-nav-main');
  let contacts = document.querySelector('.js-contacts-header');
  let menuOpenBtn = document.querySelector('.js-menu-open');
  let menuCloseBtn = document.querySelector('.js-menu-close');
  let searchBar = document.querySelector('.js-searchbar');

  menuOpenBtn.addEventListener('click', () => {
    document.body.classList.toggle('menu-is-opened');
  });

  menuCloseBtn.addEventListener('click', () => {
    document.body.classList.toggle('menu-is-opened');
  });

  if (window.matchMedia('(max-width: 640px)').matches) {
    menuContainer.append(menu);
    menuContainer.append(contacts);
    menuContainer.append(searchBar);
  }
})();
