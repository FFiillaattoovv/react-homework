import React, {ChangeEvent, useState} from 'react';
import {authAPI} from './api/requestAPI';

function Request() {
    const [checkbox, setCheckbox] = useState(false)
    const [view, setView] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckbox(e.currentTarget.checked)
    }

    const handleSendButton = () => {
        authAPI.test({success: checkbox})
            .then(response => setView(response.data.info))
            .catch(error => setView(error.message))
    }

    return (
        <div>
            <input type="checkbox" checked={checkbox} onChange={handleChange} />
            <input type="button" value={'Send'} onClick={handleSendButton}/>
            <div>{view}</div>
        </div>
    );
}

export default Request;
