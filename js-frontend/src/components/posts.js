

const postButton = document.querySelector("#see-all-posts")
const newPostForm = document.querySelector("#new-post-form")
//This is for ADDING A COMMENT
const newCommentForm = document.querySelector("#comment-form")

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
           
            blogPostCard.appendChild(postTitle)
            blogPostCard.appendChild(postContent)
            postContainer.appendChild(blogPostCard)
   
            const commentForm = document.createElement('div')
            
            commentForm.innerHTML +=   
            `<form id='comment-form' class=""> 
            <input id=1 type="text" name='comment' value="This" placeholder= 'Comment Here'/>
            <button id="create-comment-button" type="submit" name="submit"> Post Comment</button>
            </form><br>`

            postContainer.appendChild(commentForm)

            // const button = document.createElement('button')
            // button.id= `${post.id}`
            // button.className += `submit-comment`
            // button.innerHTML = 'Leave a Comment'
            // postContainer.appendChild(button)

            commentForm.addEventListener('click', function(e){
                e.preventDefault()
                
                console.log(e)
            });
             

            //  function renderCommentForm(postId){
            //     console.log(postId)
            //     return (
            //         `<form id='${postId}' class=""> 
            //         <input id='comment' type="text" name='comment' value='' placeholder= 'Comment Here'/>
            //         </form>`)
            //     }
             


        })
        
    })   
})

   

    
