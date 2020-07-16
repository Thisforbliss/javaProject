

const postButton = document.querySelector("#see-all-posts")
const newPostForm = document.querySelector("#new-post-form")
//This is for ADDING A COMMENT



newPostForm.addEventListener("submit", function(e){
     e.preventDefault()
    //console.log(e.target[1])

    //newPostForm.querySelector("#titles")
   const inputTitleValue = e.target[0].value
   const inputConstValue = e.target[1].value
   
   fetch('http://localhost:3000/api/v1/posts', {
     method: "POST",
     headers: { 'Content-Type': 'application/json',
                Accept: 'application/json' 
    },
    body: JSON.stringify({
        post:{
            title: inputTitleValue,
            content: inputConstValue
        } 

    })  
   })
   .then(function(res){
       return res.json()
   })
   .then(function(title){
       console.log(title)
   })


})



 //console.log(newPostForm)
postButton.addEventListener("click", function(e) {
    //console.log(e.target)

    fetch('http://localhost:3000/api/v1/posts')
    .then(function(posts){
        return posts.json()
    })
    .then(function(posts){
        //slap it onto the Dom
        //grab the front end container

    
    const postContainer = document.querySelector("#posts-container")
         console.log(posts)
        posts.data.forEach(function(post){
            
            
            const newPostTitle = document.createElement('h2')
            newPostTitle.innerText = post.attributes.title 
            const postTitle = postContainer.appendChild(newPostTitle)

            const newPostContent = document.createElement('p')
            newPostContent.innerHTML += `class= "lead" `
            newPostContent.innerText = post.attributes.content
            const postContent = postContainer.appendChild(newPostContent)
                
            const blogPostCard = document.createElement('div')  
            blogPostCard.appendChild(postTitle)
            blogPostCard.appendChild(postContent)
            postContainer.appendChild(blogPostCard)
   
            const commentForm = document.createElement('div')           
            commentForm.innerHTML +=   
            `<form id= "new-comment-form-${post.id}" class=""> 
            <input id= ${post.id} type="text" name='comment' value="" placeholder= 'Comment Here'/>
            <button id="create-comment-button" type="submit" name="submit" class="btn btn-info" > Post Comment</button>
            </form><br>`
            let post_id = post.id
            postContainer.appendChild(commentForm)
           createComment(post_id = post.id)

    
        })

        function createComment(post_id){
            console.log(post_id)
            const newCommentForm = document.querySelector(`#new-comment-form-${post_id}`) 
            console.log(newCommentForm) 
            const postContainer = document.querySelector(`#new-comment-form-${post_id}`)
            newCommentForm.addEventListener('submit', (e)=> {
                
                    e.preventDefault()
                    console.log(e.target.elements[0].id)
                    post_id= e.target.elements[0].id
                    commentInput = e.target.elements[0].value
                    console.log(post_id)
                    fetch('http://localhost:3000/api/v1/comments', 
                    {
                        method: "POST",
    
                        headers:{ 'Content-Type': 'application/json',
                                   Accept: 'application/json' 
                                },
    
                        body: JSON.stringify({
                           comment:
                           {    
                            content: commentInput,
                            post_id: post_id
                           } 
                        })  
    
                    }).then(function(res)
                        {
                          return res.json()
                        }).then(function(comment)
                        {
                          console.log(comment.data.attributes.content)
                        
                          const newCommentContent = document.createElement('p')
                          newCommentContent.innerText = comment.data.attributes.content
                          postContainer.appendChild(newCommentContent)
                        })
    
                });


        }
        

        
    })   
})



 
   

    
