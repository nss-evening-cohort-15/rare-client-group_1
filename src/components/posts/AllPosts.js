import React from 'react'

export const AllPosts = () => {

    return (
        <div>
            <div style={{border: '1px solid lightgray', padding: '.5em 2em', margin: '-2em 6em'}}>
            <h2><b>Posts</b></h2>

                <h3 style={{marginBottom: '3px'}}>Arranging Semantics UI for our Navbar <span role="img" aria-label="Woman at laptop">👩🏾‍💻</span> </h3>
                <p style={{fontSize: '15px', color: 'gray'}}> Author: Brittany Garrett on Tuesday, 11/30/2021</p>
                <p style={{fontSize: '12px', color: 'green'}}>Category | Category | Category | Category</p>

                <hr style={{border: '1px solid lightgray'}}/>

                <h3 style={{marginBottom: '3px'}}>Learning to connect frontend to backend <span role="img" aria-label="Fire">🔥</span> </h3>
                <p style={{fontSize: '15px', color: 'gray'}}> Author: Brittany Garrett on Friday, 11/26/2021</p>
                <p style={{fontSize: '12px', color: 'green'}}>Category | Category | Category | Category</p>

                <hr style={{border: '1px solid lightgray'}}/>

                <h3 style={{marginBottom: '3px'}}>Happy Thanksgiving! <span role="img" aria-label="Turkey">🦃</span> </h3>
                <p style={{fontSize: '15px', color: 'gray'}}> Author: Stephanie Hamilton on Thursday, 11/25/2021</p>
                <p style={{fontSize: '12px', color: 'green'}}>Category | Category | Category | Category</p>

                <hr style={{border: '1px solid lightgray'}}/>

                <h3 style={{marginBottom: '3px'}}>Found our lost dog Spartan <span role="img" aria-label="Paws">🐾</span> </h3>
                <p style={{fontSize: '15px', color: 'gray'}}> Author: Sam Baker on Monday, 11/22/2021</p>
                <p style={{fontSize: '12px', color: 'green'}}>Category | Category | Category | Category</p>

            </div>
        </div>
    )
}
