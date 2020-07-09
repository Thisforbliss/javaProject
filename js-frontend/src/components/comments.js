const commentButton = document.querySelector("create-comment-button")
const newCommentForm = document.querySelector("#comment-form")

newCommentForm.addEventListener("submit",function(event){
    event.preventDefault()
    console.log(event.target.value)
    inputComment = event.target.value

    fetch('http://localhost:3000/api/v1/comments', {
     method: "POST",
     headers: { 'Content-Type': 'application/json',
                Accept: 'application/json' 
    },
    body: JSON.stringify({
        post:{
            
            content: inputComment
        } 

    })  
   })
   .then(function(res){
       return res.json()
   })
   .then(function(comments){
       console.log(comments)
       postContainer = document.querySelector("#posts-container")


   })

})