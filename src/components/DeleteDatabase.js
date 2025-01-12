import React, { useContext } from 'react';
import Navigation from './Navigation';
import { GlobalContext } from '../context/GlobalState';

export const DeleteDatabase = () => {
    const { globalState } = useContext(GlobalContext);

    const deleteAllOrders = async () => {
        const confirmed = window.confirm('Are you sure you want to delete all orders? This action cannot be undone.');
        if (!confirmed) return;

        try {
            const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
            const response = await fetch(`${BACKEND_URL}/api/orders`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const result = await response.json();
                alert(result.message);
            } else {
                const error = await response.json();
                alert('Failed to delete orders: ' + error.error);
            }
        } catch (err) {
            console.error('Error deleting orders:', err);
            alert('An unexpected error occurred');
        }
    };

    return (
        <div className="body_white_buy">
            <Navigation />
            <div className="orders_list">
                <div>
                    <button onClick={deleteAllOrders}>Delete All Orders</button>
                </div>
            </div>
        </div>
    );
};
