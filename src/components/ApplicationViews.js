import React from "react"
import { Route } from "react-router-dom"
import { UserProvider } from "./users/UserProvider"
import { MainUserInfo } from "./users/MainUserInfo"
import { AllUsersList } from "./users/AllUsersList"
import { OneUserInfo } from "./users/OneUserInfo"
export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
        <UserProvider>
            <Route exact path="/profile">
                <MainUserInfo />
            </Route>

            <Route path="/allusers">
                <AllUsersList />
            </Route>

            <Route path="/profile/detail/:userId(\d+)">
                <OneUserInfo />
            </Route>
        </UserProvider>
        </main>
    </>
}
