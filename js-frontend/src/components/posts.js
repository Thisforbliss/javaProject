

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
            `<form id='new-comment-form' class=""> 
            <input id=${post.id} type="text" name='comment' value="" placeholder= 'Comment Here'/>
            <button id="create-comment-button" type="submit" name="submit"> Post Comment</button>
            </form><br>`

            postContainer.appendChild(commentForm)

            //Struggling to get Dynamic ID to match a post each comment
            //Struggling with getting the input of the new comment form. Doesnt work with e.target.value


            // const button = document.createElement('button')
            // button.id= `${post.id}`
            // button.className += `submit-comment`
            // button.innerHTML = 'Leave a Comment'
            // postContainer.appendChild(button)

            

            //  function renderCommentForm(postId){
            //     console.log(postId)
            //     return (
            //         `<form id='${postId}' class=""> 
            //         <input id='comment' type="text" name='comment' value='' placeholder= 'Comment Here'/>
            //         </form>`)
            //     }
            
        })
        const newCommentForm = document.querySelector("#new-comment-form")
        
        newCommentForm.addEventListener('submit', (e)=> {
            
                e.preventDefault()
                console.log(e.target.elements[0].value)
            });

        
    })   
})



 
   

    
