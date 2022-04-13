let userskor = document.getElementById('userskor');
let computerskor = document.getElementById('computerskor');
let status = document.getElementById('status');
const r = document.getElementById('r');
const p = document.getElementById('p');
const s = document.getElementById('s');

function main(){
  r.addEventListener("click", (e) => movement('r',e.path));
  p.addEventListener("click", (e) => movement('p',e.path));
  s.addEventListener("click", (e) => movement('s',e.path));
}

main();

function computermovement(){
  const computer_obj = ['p', 'r', 's'];
  const random_data = Math.floor(Math.random() * 3);
  return computer_obj[random_data];
}

function winning(e){
  userskor.innerHTML++
  status.innerHTML = "Galibiyet";
  e.classList.add("green-win");
  setTimeout(() =>  e.classList.remove("green-win"), 750);
}

function lost(e){
  computerskor.innerHTML++;
  status.innerHTML = "Kaybettin";
  e.classList.add("red-lost");
  setTimeout(() =>  e.classList.remove("red-lost"), 750);
}

function together(e){
  status.innerHTML = "Berabere";
  e.classList.add("orange-together");
  setTimeout(() =>  e.classList.remove("orange-together"), 750);
}

function movement(user_data,e){
  const computer_data = computermovement();
  switch (user_data + computer_data) {
    case "pr":
    case "rs":
    case "sp":
      winning(e[1]);
      break;
    case "rp":
    case "sr":
    case "ps":
      lost(e[1]);
      break;
    case "pp":
    case "rr":
    case "ss":
      together(e[1]);
      break;
  }
}
