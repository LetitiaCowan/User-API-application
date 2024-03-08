// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

fetch("https://jsonplaceholder.typicode.com/users")
const userListEl = document.querySelector('.user-list')

async function main() {
    const user = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await user.json();
    console.log(userData)

    userListEl.innerHTML = userData.map((user) => userHTML(user)).join("");


}

main();

function showUserPost(id) {
  localStorage.setItem("id", id)// 2) stores the id in the local storage which saves there
  window.location.href = `${window.location.origin}/user.html` //reroutes to the the correct window
}


// 1) user.id is passed through to the function above from the function below
function userHTML(user) {
  return  `<div class="user-card" onclick="showUserPost(${user.id})">
  <div class="user-card__container">
    <h3>${user.name}</h4>
      <p><b>Email:</b> ${user.email}/p>
      <p><b>Phone:</b> ${user.phone}</p>
      <p><b>Website:</b> <a href="https://${user.website}" target="_blank">website.website</a></p>
  </div>
</div>`;
}