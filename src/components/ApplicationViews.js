import React from "react"
import { Route } from "react-router-dom"
import { UserProvider } from "./users/UserProvider"
import { UserInfo } from "./users/UserInfo"
export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
        <UserProvider>
            <Route path="/profile">
                <UserInfo />
            </Route>
        </UserProvider>
        </main>
    </>
}
