import React from "react";
import Concession from "./Concession";


function ConcessionsList(props) {

    const displayConcessions = props.concessions.map(concession => <Concession
        concession = {concession}
        key = {concession.id}
        />)
    
    return (
        <div>
            {displayConcessions}
        </div>
    )
}

export default ConcessionsList;