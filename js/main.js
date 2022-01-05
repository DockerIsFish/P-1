const toggleButton = document.querySelector('.header_togglebutton');
const logo_text = document.querySelector('.header_logo_text');
const login_text = document.querySelector('.header_login_text');
const board_list = document.querySelector('.board_list');

toggleButton.addEventListener('click', () => {
  board_list.classList.toggle('active');
});
