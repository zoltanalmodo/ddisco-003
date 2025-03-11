import React from 'react';
import Navigation from './Navigation';

export const DeleteDatabase = () => {

    const deleteAllOrders = async () => {
        const confirmed = window.confirm('Are you sure you want to delete all orders? This action cannot be undone.');
        if (!confirmed) return;

        try {
            // Use a relative URL instead of BACKEND_URL with localhost fallback
            const response = await fetch('/api/orders', {
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