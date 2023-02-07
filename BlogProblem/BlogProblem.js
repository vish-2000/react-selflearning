const Posts = [
    {title: 'Title One', body: 'This is Post One'},
    {title: 'Title Two', body: 'This is Post Two'},
    {title: 'Title Three', body: 'This is Post Three'},
    {title: 'Title Four', body: 'This is Post Four'},
    {title: 'Title Five', body: 'This is Post Five'},
    {title: 'Title Six', body: 'This is Post Six'},
]

getPosts = ()=> {
        let output = '';

    
    //Prepare Single Object into List Element
    Posts.forEach((post) => {
        output += '<li>${post.title} ${post.body}</li>'
    });

    //Add to Html Page
    document.body.innerHTML = output;    
}

getPosts()


const createPost = (SinglePost) => {
    Posts.push(SinglePost);
}

createPost({title: 'Title Seven', body: 'This is Post Seven'})