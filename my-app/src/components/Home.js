import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import pokeball from '../pokiball.png';
import {connect} from 'react-redux';


class Home extends Component{
    render(){
        const { posts } = this.props;
        const postsList = posts.length ? (
            posts.map((post) => {
                return(
                    <div className="post card" key = {post.id}>
                    <img src={pokeball} alt="Pokeball" />
                    <div className="card-content">
                        <Link to={'/' + post.id}><span className = "card-title">{post.title}</span></Link>
                        <p>{post.body}</p>
                    </div>
                    </div>
                )
            })
        ):(
            <div className="center">No Posts Yet </div>
        )

        return(
            <div className="container home">
                <h4 className="center">Home</h4>
                {postsList}
            </div>
       )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}  

export default connect(mapStateToProps)(Home)