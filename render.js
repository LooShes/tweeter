const Renderer = function () {
    const renderPosts = function (posts) {

        $("#posts").empty()

        for (let i = 0; i < posts.length; i++) {
            let postID = posts[i].id
            $("#posts").append(`<div class='post-text' data-id=${postID}>${posts[i].text}</div>`)

            for (let j = 0; j < posts[i].comments.length; j++) {
                let commentID = posts[i].comments[j].id
                $('*[data-id='+postID+']').append(`<div class='comments' data-id=${commentID}><i class="fas fa-times delete-comment"></i>${posts[i].comments[j].text}</div>`)
            }

            $('*[data-id='+postID+']').append(`<input type='text' id='comm-input' placeholder='Got something to say?'>`)
            $('*[data-id='+postID+']').append(`<button class='comment'>Comment</button><br>`)
            $('*[data-id='+postID+']').append(`<button class='delete'>Delete Post</button><br><br>`)
        }
    }

    return {
        renderPosts: renderPosts
    }
}


//$('.slide-link[data-slide="0"]').addClass('active');