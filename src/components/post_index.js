import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostIndex extends Component {
    //immediately called as soon as the component is loaded
    //fetching data is asynchronous operation
    //React will load as soon as browser starts and hence, we use this to fetch data
    //Life cycle method
    
    componentDidMount(){
        this.props.fetchPosts();
    }
    
    renderPosts() {
        return _.map(this.props.posts, post => {
            return(
            <li className="list-group-item" key={post.id}>
                <Link to = {`/posts/${post.id}`}>
                    {post.title}
                </Link>
            </li>
            );
        });
    }
    
    render() {
        return(
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {posts: state.posts};
}

//{fetchPosts} is similar to mapStatetoProps
//this step is done by connect

export default connect(mapStateToProps, {fetchPosts})(PostIndex);