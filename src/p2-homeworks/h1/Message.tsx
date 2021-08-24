import React from 'react';
import classes from './Message.module.css'


type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={classes.post}>
            <img src={props.avatar} alt="Avatar"/>
            <div className={classes.message}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.text}>{props.message}</div>
                <div className={classes.time}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;
