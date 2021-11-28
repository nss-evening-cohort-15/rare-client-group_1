import React from 'react'

export const AllPosts = () => {

    /*
    // INSTRUCTIONS FOR LAYOUT OF POST!!
    // ---------------------------------
    And each post in the list should display the title, author and category
    And the list should ONLY contain approved Posts
    And the list should ONLY contain Posts with a publication date that is in the past
    And the list should be in order of publication date with the most recent on top
    */
   
    /*
   //PLACEHOLDER: 
   <div></div>
   */
    return (
        <div>
            <div style={{border: '1px solid lightgray', padding: '.5em 2em', margin: '-2em 6em'}}>
                <h3 style={{marginBottom: '-15px'}}>Learning to connect frontend to backend <span role="img" aria-label="Fire">🔥</span> </h3>
                <p style={{fontSize: '15px', color: 'gray'}}> Author: Brittany Garrett on Friday, 11/26/2021</p>
                <p style={{fontSize: '12px', color: 'green'}}>Category | Category | Category | Category</p>

                <hr style={{border: '1px solid lightgray'}}/>

                <h3 style={{marginBottom: '-15px'}}>Happy Thanksgiving! <span role="img" aria-label="Fire">🦃</span> </h3>
                <p style={{fontSize: '15px', color: 'gray'}}> Author: Stephanie Hamilton on Thursday, 11/25/2021</p>
                <p style={{fontSize: '12px', color: 'green'}}>Category | Category | Category | Category</p>

                <hr style={{border: '1px solid lightgray'}}/>

                <h3 style={{marginBottom: '-15px'}}>Found our lost dog Spartan <span role="img" aria-label="Fire">🐾</span> </h3>
                <p style={{fontSize: '15px', color: 'gray'}}> Author: Sam Baker on Monday, 11/22/2021</p>
                <p style={{fontSize: '12px', color: 'green'}}>Category | Category | Category | Category</p>

            </div>
        </div>
    )
}
