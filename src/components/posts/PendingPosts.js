import React from 'react'

export const PendingPosts = () => {
    return (
        <div>
            <div style={{border: '1px solid lightgray', padding: '.5em 2em', margin: '-2em 6em'}}>
            <h2><b>Pending Posts</b></h2>

                <h3 style={{marginBottom: '3px'}}>Using Rare Media's Functions<span role="img" aria-label="Sunglasses emoji">😎</span></h3>
                <p style={{fontSize: '15px', color: 'gray'}}> Author: Stephanie Hamilton on Tuesday, 11/30/2021</p>
                <p style={{fontSize: '12px', color: 'green'}}>Category | Category | Category | Category</p>

                <hr style={{border: '1px solid lightgray'}}/>

                <h3 style={{marginBottom: '3px'}}>Adjusting code for ease <span role="img" aria-label="Laptop"></span>💻</h3>
                <p style={{fontSize: '15px', color: 'gray'}}> Author: Brittany Garrett on Friday, 11/26/2021</p>
                <p style={{fontSize: '12px', color: 'green'}}>Category | Category | Category | Category</p>
              
            </div>
        </div>
    )
}
