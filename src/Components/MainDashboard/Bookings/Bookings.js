import React from 'react';
import { Form } from 'react-bootstrap';
import './Bookings.css';

const Bookings = ({ singleHouse }) => {
    const { title, price, _id, email, name, phone, message, status } = singleHouse;
    const [newStatus, setNewStatus] = React.useState(status);

    const pendingStyle = {
        color: 'red',
        fontWeight: 'bold',
        fontSize: '1.1rem'
    };
    const onGoingStyle = {
        color: 'Orange',
        fontWeight: 'bold',
        fontSize: '1.1rem'
    };
    const DoneStyle = {
        color: 'Green',
        fontWeight: 'bold',
        fontSize: '1.1rem'
    };

    const handleStatus = (e) => {
        setNewStatus(e.target.value);

        fetch(`http://pure-inlet-20297.herokuapp.com/status-update/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: e.target.value })
        })
            .then(res => {

                if (res.status === 200) {
                    alert('updated')
                };

            })
            .catch(error => {
                console.error(error)
            })
    };

    return (
        <>
            <div className="d-flex justify-content-center listings">
                <div>
                    <p className="text-center">{name}</p>
                </div>
                <div>
                    <p className="text-center">{email}</p>
                </div>
                <div>
                    <p className="text-center">{phone}</p>
                </div>
                <div>
                    <p className="text-center">{message}</p>
                </div>
                <div>
                    <Form.Control
                        onChange={handleStatus}
                        style={
                            newStatus === 'Pending' ? pendingStyle
                                : newStatus === 'On Going' ? onGoingStyle : DoneStyle
                        }
                        as="select"
                        defaultValue={newStatus}>
                        <option>Pending</option>
                        <option>On Going</option>
                        <option>Done</option>
                    </Form.Control>
                </div>
            </div>
        </>
    );
};

export default Bookings;