import React, {useState, createContext} from "react";

export const CategoryContext = createContext()

export const CategoryProvider = (props) => {
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        return fetch("http://localhost:8088/categories")
            .then(res => res.json())
            .then(setCategories)
    }

    const getCategoryById = (id) => {
		return fetch(`http://localhost:8088/categories/${id}`)
			.then(res => res.json())
    }

    const addCategory = (categoryObj) => {
        return fetch("http://localhost:8088/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(categoryObj)
        })
        .then(getCategories)
    }

    const updateCategory = (category) => {
        return fetch((`http://localhost:8088//items/${category.id}`), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(category)
        })
            .then(getCategories)
    }

    const deleteCategory = (categoryId) => {
        return fetch((`http://localhost:8088/posts/${categoryId}`), {
            method: "DELETE"
        })
            .then(getCategories)
    }

    return (
		<CategoryContext.Provider value={{
			categories, setCategories, getCategories, addCategory, getCategoryById, updateCategory, deleteCategory
		}}>
			{props.children}
		</CategoryContext.Provider>
	)
}