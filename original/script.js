const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img= document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll("animated_bg");
const animated_bg_texts = document.querySelectorAll("animated_bg_text");

function getData() {
  header.innerHTML = `<img src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80" alt=""
      />`;
  title.innerHTML = "";
  excerpt.innerHTML = "";
  profile_img.innerHTML = "";
  name.innerHTML = "";
  date.innerHTML = "";
   
}