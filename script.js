let posts = JSON.parse(localStorage.getItem("posts")) || [];

let postText = document.getElementById("postText");
let counter = document.getElementById("counter");



postText.addEventListener("input", function () {

    counter.textContent = postText.value.length + "/280";

});


function addPost() {

    let text = postText.value.trim();

    if (text === "") {
        alert("Please write something!");
        return;
    }

    let post = {
        id: Date.now(),
        text: text,
        likes: 0
    };

    posts.unshift(post);

    savePosts();

    postText.value = "";
    counter.textContent = "0/280";

    displayPosts();
}


function displayPosts() {

    let postsContainer = document.getElementById("posts");

    postsContainer.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {

        let post = posts[i];

        let postElement = document.createElement("div");

        postElement.className = "post";

        postElement.innerHTML = `

            <div class="post-header">

                <div class="post-user">

                    <div class="avatar">R</div>

                    <div>
                        <h3>Rasigapriya</h3>
                        <p>@rasigapriya</p>
                    </div>

                </div>

            </div>

            <p class="post-content">
                ${post.text}
            </p>

            <div class="post-actions">

                <button 
                    class="like-btn"
                    onclick="likePost(${post.id})">

                    ❤️
                    <span class="like-count">${post.likes}</span>

                </button>

                <button
                    class="delete-btn"
                    onclick="deletePost(${post.id})">

                    🗑️ Delete

                </button>

            </div>

        `;

        postsContainer.appendChild(postElement);
    }
}

function likePost(id) {

    for (let i = 0; i < posts.length; i++) {

        if (posts[i].id === id) {

            posts[i].likes++;

        }
    }

    savePosts();

    displayPosts();
}




function deletePost(id) {

    posts = posts.filter(function(post) {

        return post.id !== id;

    });

    savePosts();

    displayPosts();
}


function savePosts() {

    localStorage.setItem("posts", JSON.stringify(posts));



displayPosts();
