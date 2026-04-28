let posts = JSON.parse(localStorage.getItem("posts")) || [];

function saveData() {
    localStorage.setItem("posts", JSON.stringify(posts));
}

function displayPosts() {
    let feed = document.getElementById("feed");
    feed.innerHTML = "";

    posts.forEach((post, index) => {
        feed.innerHTML += `
            <div class="post">
                <img src="${post.image}">
                <p>${post.caption}</p>

                <div class="actions">
                    <button onclick="likePost(${index})">
                        ❤️ ${post.likes}
                    </button>
                    <button onclick="deletePost(${index})">🗑️</button>
                </div>

                <div class="comments">
                    ${post.comments.map(c => `<p>${c}</p>`).join("")}
                    
                    <input type="text" id="comment-${index}" placeholder="Add comment">
                    <button onclick="addComment(${index})">Post</button>
                </div>
            </div>
        `;
    });
}

function createPost() {
    let caption = document.getElementById("caption").value;
    let file = document.getElementById("imageInput").files[0];

    if (!caption || !file) {
        alert("Add caption and image!");
        return;
    }

    let reader = new FileReader();

    reader.onload = function (e) {
        posts.unshift({
            caption: caption,
            image: e.target.result,
            likes: 0,
            comments: []
        });

        saveData();
        displayPosts();
    };

    reader.readAsDataURL(file);

    document.getElementById("caption").value = "";
    document.getElementById("imageInput").value = "";
}

function likePost(index) {
    posts[index].likes++;
    saveData();
    displayPosts();
}

function deletePost(index) {
    posts.splice(index, 1);
    saveData();
    displayPosts();
}

function addComment(index) {
    let input = document.getElementById(`comment-${index}`);

    if (input.value === "") return;

    posts[index].comments.push(input.value);
    saveData();
    displayPosts();
}

displayPosts();