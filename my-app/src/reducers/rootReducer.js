const initState = {
    posts: [
        {id:1, title:'Title 1', body: 'body 1'},
        {id:2, title:'Title 1', body: 'body 1'},
        {id:3, title:'Title 1', body: 'body 1'}
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST'){
        let filterPost = state.posts.filter( post => action.id.toString() !== post.id.toString());
        console.log(filterPost);
        console.log('if runs');
        return{
            ...state,
            posts: filterPost,
        }
        
    }
    return state;
}

export default rootReducer;