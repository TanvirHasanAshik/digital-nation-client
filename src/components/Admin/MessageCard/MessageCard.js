import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const MessageCard = ({ messages, handleMessageDelete }) => {
    const {_id, date, time, name, email, message } = messages;
    return (
        <section>
            <table class="text-center table table-hover table-dark">
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{message}</td>
                        <td>{date}</td>
                        <td>{time}</td>
                        <td>
                            <div onClick={()=>handleMessageDelete(_id)} className="btn btn-primary"><FontAwesomeIcon icon={faTrash} /></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default MessageCard;