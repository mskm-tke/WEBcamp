let username;
let userresult;
username = prompt("お名前を教えて下さい。");

if (username == ""){
    username = "名無し"
}

document.getElementById("name").innerHTML = username;
let rand = Math.floor( Math.random() * 9) ;

if (rand == 0) {
    userresult = "大吉";
  }
  if (rand == 1) {
    userresult = "中吉";
  }
  if (rand == 2) {
    userresult = "小吉";
  }
  if (rand == 3) {
    userresult = "半吉";
  }
  if (rand == 4) {
    userresult = "末吉";
  }
  if (rand == 5) {
    userresult = "末小吉";
  }
  if (rand == 6) {
    userresult = "吉";
  }
  if (rand == 7) {
    userresult = "凶";
  }
  if (rand == 8) {
    userresult = "大凶";
  }
  document.getElementById("result").innerHTML = userresult;