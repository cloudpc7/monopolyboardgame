import React from 'react'

export default function Board(props) {
    const goSpace = (space) =>{
        if(space === 1){
         return (
            <div className="go-space">
                <p>COLLECT<br/>$200.00 SALARY<br/>AS YOU PASS</p>
                <img  className="go-icon" src={props.img}/>
            </div>
            
         )
        }
        if(space === 11) {
            return (
                <div>
                    <div className="jail">
                        <img className="jail-icon" src="jailicon.png" />
                    </div>
                    <div className="just">
                        <p>JUST</p>
                    </div>
                    <div className="visiting">
                        <p>VISITING</p>
                    </div>
                </div>
                   
            )
        } else if(space === 21){
            return (
                <div>
                    <img className="free-parking-icon" src="./freeparking.png"/>
                </div>
            )
        }
    }

    const prize = (name)=> {
        if(props.name == 'Community Chest'){
            return props.img
        } else if(props.space === 8){
            return props.img
        } else if(props.space === 23){
            return props.img
        } else if(props.space === 37){
            return props.img
        }
    }

    return (
        <div>
            <div className="name">{props.name ? props.name : goSpace(props.space)}</div>
            <img className="community-chest" src={prize(props.name)}/>
            <div className="value">{props.value ? `$${props.value}` : props.value}</div>
        </div>
                
    )
}