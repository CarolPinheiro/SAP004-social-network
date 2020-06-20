import { createElementProfilePost } from './profileAndComments.js';

export function backPosts() {
  const buttonBack = document.querySelector('#button-back-posts');
  buttonBack.addEventListener('click', () => {
    window.location = '#posts';
  });
}

export function readPostsProfileDOM(post, element) {
  element.querySelector('#profile-posts').prepend(createElementProfilePost(post));
}

export function editProfile(posts){
  const buttonEdit = document.getElementById('edit-profile')
  buttonEdit.addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.innerHTML = '';
    popup.classList.remove('popup-none');
    popup.classList.add('popup');
    const editAreaPopUp = `<label>Nome</label> 
    <input type='text' value='${posts.data().nameUser}'>
    <label>Data de Nascimento</label>
    <input type='date' value='${posts.data().birthdayUser}'>
    <label>Foto</label>
    <input type='file'>
    <label>Patente</label>
    <input type='text'>
    `;
    popup.innerHTML = editAreaPopUp;


  })

}