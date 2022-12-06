// needs conditional rendering: 
// small mode with min info for appearing in the concerts list 
// large mode with bands for displaying by itself

import Band from './Band'

function Concert() {
    return (
        <>
        <h2>A Concert</h2>
        <Band />
        </>
    )
}

export default Concert