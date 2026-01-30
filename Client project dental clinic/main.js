let header = document.querySelector(".header");



let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');


menu.onclick = () =>{
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');

}

window.onscroll = () =>{
    menu.classList.toggle('fa-xmark');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        header.classList.add('active');
    }else{
         header.classList.remove('active');
    }
}

const questions = document.querySelectorAll(".faq-question");

questions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});


document.getElementById('privacyAgreeForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('agreeMessage').innerText = "Thank you! You have agreed to the Privacy Policy.";
});