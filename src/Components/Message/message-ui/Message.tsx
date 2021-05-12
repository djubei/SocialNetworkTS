import React from "react";

type MessagePropsType={
    id:number
    message:string
}

export const Message = (props:MessagePropsType) => {
    return (
        <div>
            {props.message}
        </div>
    )
}
