import React, {useState, createContext} from "react";

export const SubscriptionContext = createContext()

export const SubscriptionProvider = (props) => {
    const [subscriptions, setSubscriptions] = useState([])

    const getSubscriptions = () => {
        return fetch("http://localhost:8088/subscriptions")
            .then(res => res.json())
            .then(setSubscriptions)
    }

    const getSubscriptionById = (subscription_id) => {
		return fetch(`http://localhost:8088/subscriptions/${subscription_id}`)
			.then(res => res.json())
    }

    const addSubscriptions = (subscriptionObj) => {
        return fetch("http://localhost:8088/subscriptions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(subscriptionObj)
        })
        .then(getSubscriptions)
    }

    const updateSubscription = (subscription) => {
        return fetch((`http://localhost:8088//items/${subscription.id}`), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(subscription)
        })
            .then(getSubscriptions)
    }

    const deleteSubscription = (subscriptionId) => {
        return fetch((`http://localhost:8088/posts/${subscriptionId}`), {
            method: "DELETE"
        })
            .then(getSubscriptions)
    }

    return (
		<SubscriptionContext.Provider value={{
			subscriptions, setSubscriptions, getSubscriptions, addSubscriptions, getSubscriptionById, updateSubscription, deleteSubscription
		}}>
			{props.children}
		</SubscriptionContext.Provider>
	)
}