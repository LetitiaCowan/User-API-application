const postListEL = document.querySelector(".post-list");
const id = localStorage.getItem("id") // 3) since the id is saved in local storage, this pulls that information to use in this file/window

async function onSearchChange(event) {
  const id = event.target.value;
  renderPosts(id)
}

async function renderPosts(id) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const postsData = await posts.json(); 
    postListEL.innerHTML = postsData.map(post => postHTML(post)).join("");
  
}

function postHTML(post) { //dynamic posts function
    return `<div class="post">
    <div class="post__title">
      ${post.title}
    </div>
    <p class="post__body">
    ${post.body}
    </p>
  </div>`
}

renderPosts(id)