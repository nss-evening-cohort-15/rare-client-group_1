import React, {useState, createContext} from "react";

export const PostContext = createContext()

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([])

    const getPosts = () => {
        return fetch("http://localhost:8088/posts")
            .then(res => res.json())
            .then(setPosts)
    }

    const getPostById = (id) => {
		return fetch(`http://localhost:8088/posts/${id}`)
			.then(res => res.json())
    }

    const addPost = (postObj) => {
        return fetch("http://localhost:8088/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postObj)
        })
        .then(getPosts)
    }

    const updatePost = (post) => {
        return fetch((`http://localhost:8088//items/${post.id}`), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then(getPosts)
    }

    const deletePost = (postId) => {
        return fetch((`http://localhost:8088/posts/${postId}`), {
            method: "DELETE"
        })
            .then(getPosts)
    }

    return (
		<PostContext.Provider value={{
			posts, setPosts, getPosts, addPost, getPostById, updatePost, deletePost
		}}>
			{props.children}
		</PostContext.Provider>
	)
}