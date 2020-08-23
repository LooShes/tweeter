const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

const twit = function() {
    const postText = document.getElementById("input").value 
    tweeter.addPost(postText)
    $("#input").val("")
    renderer.renderPosts(tweeter.getPosts())
}

$('#posts').on('click', '.delete', function() {
    let postID = $(this).closest(".post-text").data().id
    tweeter.removePost(postID)
    renderer.renderPosts(tweeter.getPosts())
})

$('.comment').on('click', function() {
    let postID = $(this).closest(".post-text").data().id
    const comText = document.getElementById("comm-input").value
    tweeter.addComment(postID, comText)
    renderer.renderPosts(tweeter.getPosts())
})

$('#posts').on('click', '.fa-times', function() {
    let postID = $(this).closest(".post-text").data().id
    let commentID = $(this).closest(".comments").data().id
    console.log(postID)
    console.log(commentID)
    tweeter.removeComment(postID, commentID)
    renderer.renderPosts(tweeter.getPosts())
})

