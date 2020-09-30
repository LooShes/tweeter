const Tweeter = function () {
    let posts = [{
            text: "First post!",
            id: "p1",
            comments: [{
                    id: "c1",
                    text: "First comment on first post!"
                },
                {
                    id: "c2",
                    text: "Second comment on first post!!"
                },
                {
                    id: "c3",
                    text: "Third comment on first post!!!"
                }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [{
                    id: "c4",
                    text: "Don't wory second poster, you'll be first one day."
                },
                {
                    id: "c5",
                    text: "Yeah, believe in yourself!"
                },
                {
                    id: "c6",
                    text: "Haha second place what a joke."
                }
            ]
        }
    ]

    let postIdCounter = 0,
        commentIdCounter = 0

    const getPosts = function () {
        return posts
    }

    const addPost = function (text) {
        postIdCounter = posts.length + 1
        let nextPostID = "p" + postIdCounter

        const newPost = {
            text: text,
            id: nextPostID,
            comments: []
        }
        posts.push(newPost)
    }

    const removePost = function (postID) {
        posts.splice(postID, 1)
    }

    const addComment = function (postID, text) {
        let lastCommentID = 0

        for (let i = 0; i < posts.length; i++) {
            for (let j = 0; j < posts[i].comments.length; j++) {
                commentIdCounter = parseInt((posts[i].comments[j]).id[1])
                if(commentIdCounter > lastCommentID) {
                    lastCommentID = commentIdCounter
                }
            }
        }

        lastCommentID++

        for(let i=0; i<posts.length; i++) {
            if(postID === posts[i].id) {
                posts[i].comments.push({ id: "c" + lastCommentID,
                                         text: text})
            }
        }
    }

    const removeComment = function(postID, commentID) {
       
        for (let i = 0; i < posts.length; i++) {
            for (let j = 0; j < posts[i].comments.length; j++) {
                if (posts[i].id === postID && posts[i].comments[j].id === commentID) {
                    posts[i].comments.splice(j, 1)
                }
            }
        }
    }

    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }

}

//const tweeter = Tweeter()

// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removePost("p1")
// console.log(tweeter.getPosts())
// There should only be two posts in the post's array:
// {text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
// {text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going
//============================
//============================

// tweeter.addComment("p3", "Damn straight it is!")
// tweeter.addComment("p2", "Second the best!")
// console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}