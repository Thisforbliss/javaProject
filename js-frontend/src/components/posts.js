

const postButton = document.querySelector("#see-all-posts")

const newPostForm = document.querySelector("#new-post-form")

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
            
            
            const newPostTitle = document.createElement('h4')
            newPostTitle.innerText = post.attributes.title 
            const postTitle = postContainer.appendChild(newPostTitle)

            const newPostContent = document.createElement('p')
            newPostContent.innerText = post.attributes.content
            const postContent = postContainer.appendChild(newPostContent)
            

            


            const blogPostCard = document.createElement('div') 
           
            const newBlog = blogPostCard.appendChild(postTitle, postContent)
            postContainer.appendChild(newBlog)
   
            const commentForm = document.createElement('div')
            
            commentForm.innerHTML +=    
            `<form id='comment-form' class=""> 
            <input id='comment' type="text" name='comment' value='' placeholder= 'Comment Here'/>
            <button id="create-comment-button" type="submit" name="submit"> Post Comment</button>
            </form><br>`

            postContainer.appendChild(commentForm)

            const button = document.createElement('button')
            button.id= `${post.id}`
            button.innerHTML = 'Leave a Comment'
            postContainer.appendChild(button)

            button.addEventListener('click', function(e){
                renderCommentForm(button.id)
            });
             

            //  function renderCommentForm(postId){
            //     console.log(postId)
            //     return (
            //         `<form id='comment-form' class=""> 
            //         <input id='comment' type="text" name='comment' value='' placeholder= 'Comment Here'/>
            //         </form>`)
            //     }
             


        })
        
    })   
})

   

    
