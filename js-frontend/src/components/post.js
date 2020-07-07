singlePost(id) {
   fetch(`http://localhost:3000/api/v1/post/${id}`)
   .then(response => response.json())
   .then(data => console.log(data))
   .then(function(posts){
        //slap it onto the Dom
        //grab the front end container

    
        const postContainer = document.querySelector("#post-container")
         console.log('IN SINGULAR BLOG ', post)
        // post.data(function(post){
        //   const newPostTitle = document.createElement('h4')
        //     newPostTitle.innerText = post.attributes.title 
        //     postContainer.appendChild(newPostTitle)

        //     const newPostContent = document.createElement('p')
        //     newPostContent.innerText = post.attributes.content
        //     postContainer.appendChild(newPostContent)
        //})        
    })   

}