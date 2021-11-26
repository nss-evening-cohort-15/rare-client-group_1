import React, {useState, createContext} from "react";

export const TagContext = createContext()

export const TagProvider = (props) => {
    const [tags, setTags] = useState([])

    const getTags = () => {
        return fetch("http://localhost:8088/tags")
            .then(res => res.json())
            .then(setTags)
    }

    const getTagById = (tag_id) => {
		return fetch(`http://localhost:8088/tags/${tag_id}`)
			.then(res => res.json())
    }

    const addTags = (tagObj) => {
        return fetch("http://localhost:8088/tags", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tagObj)
        })
        .then(getTags)
    }


    const updateTag = (tag) => {
        return fetch((`http://localhost:8088//items/${tag.id}`), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tag)
        })
            .then(getTags)
    }

    const deleteTag = (tagId) => {
        return fetch((`http://localhost:8088/posts/${tagId}`), {
            method: "DELETE"
        })
            .then(getTags)
    }    

    return (
		<TagContext.Provider value={{
			tags, setTags, getTags, addTags, getTagById, updateTag, deleteTag
		}}>
			{props.children}
		</TagContext.Provider>
	)
}