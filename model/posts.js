module.exports = {
    posts: [
        {id:"",
        title:"",
        description:""},
    ],

    getAll(){
        return this.posts;

    },

    newPost(title,description){

        this.posts.push({id: generateID, title, description});
    },

    
}

function generateID(){
    return Math.random().toString(36).substring(2,9)
}