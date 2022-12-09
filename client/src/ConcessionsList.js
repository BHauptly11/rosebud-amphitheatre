import React from "react";
import Concession from "./Concession";
import { Header } from 'semantic-ui-react'



function ConcessionsList(props) {

    const displayConcessions = props.concessions.map(concession => <Concession
        concession = {concession}
        key = {concession.id}
        deleteConcession = {props.deleteConcession}
        />)
    
    return (
        <div>
                <div className="concession-header-align">
                <Header textAlign='center' dividing
                    as='h2'
                    content='Check out our Menu!'
                />
                </div>
            {displayConcessions}
        </div>
    )
}

export default ConcessionsList;