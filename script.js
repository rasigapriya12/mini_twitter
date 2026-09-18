// Create Post

document.getElementById("postBtn").addEventListener("click", function () {

    let text = document.getElementById("postText").value.trim();

    if (text === "") {
        alert("Please write something!");
        return;
    }

    let post = document.createElement("div");

    post.className = "post";

    post.innerHTML = `
        <div class="avatar" style="background:#e1d2ff;color:#422080;">
            M
        </div>

        <div class="post-content">
            <h3>Monika</h3>
            <p class="role">IT Student</p>
            <p class="text">${text}</p>
            <p class="time">Just now</p>
        </div>

        <button class="like-btn">
            👍 Like (<span>0</span>)
        </button>
    `;

    document.getElementById("posts").prepend(post);

    document.getElementById("postText").value = "";

    addLikeFunction(post.querySelector(".like-btn"));
});


// Like Button

function addLikeFunction(button) {

    button.addEventListener("click", function () {

        let count = this.querySelector("span");

        let number = parseInt(count.textContent);

        if (this.classList.contains("liked")) {

            number--;

            this.classList.remove("liked");

        } else {

            number++;

            this.classList.add("liked");
        }

        count.textContent = number;
    });
}


// Existing Like Buttons

let likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(function (button) {
    addLikeFunction(button);
});


// Follow Buttons

let followButtons = document.querySelectorAll(".follow-btn");

followButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        if (this.textContent === "Follow") {
            this.textContent = "Following";
        } else {
            this.textContent = "Follow";
        }

    });

});


// Logout

document.getElementById("logoutBtn").addEventListener("click", function () {

    alert("You have been logged out!");

});
