import React, {Component} from 'react';
import {connect} from 'react-redux'
import {deletePost} from '../actions/postActions'

class Posts extends Component{
    handleClick = () => {
        this.props.deletePost(this.props.post.id.toString());
        this.props.history.push('/')
    }
    render(){
        console.log(this.props);
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ):(
            <div className="center">
                <h1>Loading...</h1>
            </div>
        )
        return(
            <div className="center">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return{
        post: state.posts.find( post => post.id.toString() === id  )
    } 
}

const mapDispatchToProps = (dispatch) => {
    return{
        deletePost: (id) => { dispatch(deletePost(id))}
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)