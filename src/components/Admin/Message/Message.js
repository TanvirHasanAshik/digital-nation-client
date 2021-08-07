import React, { useEffect, useState } from 'react';
import MessageCard from '../MessageCard/MessageCard';
import Sidebar from '../Sidebar/Sidebar';

const Message = () => {
    const [message, setMessage] = useState([]);

    const handleMessageDelete = (id) => {
        fetch(`https://mighty-reaches-13945.herokuapp.com/deleteMessage/${id}`,{
            method: 'DELETE',
        })
        .then(res => {
            if(res){
                window.location.reload();
            }
        })
    }
    useEffect(() => {
        fetch('https://mighty-reaches-13945.herokuapp.com/getClientMessage')
        .then(response => response.json())
        .then(data => setMessage(data));
    }, []);

    return (
        <div className="container-fluid admin-container">
            <div className="row ">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-5 pt-5 message-box">
                    {
                        message.map(ms=> 
                        <MessageCard messages={ms} handleMessageDelete={handleMessageDelete}>

                        </MessageCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Message;