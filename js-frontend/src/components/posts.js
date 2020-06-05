

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
    .then(function(res){
        return res.json()
    })
    .then(function(posts){
        //slap it onto the Dom
        //grab the front end container

    
    const postContainer = document.querySelector("#posts-container")
         console.log(posts)
        posts.data.forEach(function(post){
          const newPostTitle = document.createElement('h4')
            newPostTitle.innerText = post.attributes.title 
            postContainer.appendChild(newPostTitle)

            const newPostContent = document.createElement('p')
            newPostContent.innerText = post.attributes.content
            postContainer.appendChild(newPostContent)

        })
        
    })   
})
