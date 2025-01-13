import React, { useContext } from 'react'
import Navigation from './Navigation';
import { GlobalContext } from '../context/GlobalState'


export const Orders = () => {

  const {
    orders,
    loading,
    error,
  } = useContext(GlobalContext);



return (
    <div className='body_white_buy'>

        <Navigation />

        <div className="orders_list">

            <div>
                <h1>Orders:</h1>
                {loading ? (
                    <p>Loading orders...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : orders.length === 0 ? (
                    <p>No orders found.</p>
                ) : (
                    <ul>
                    {orders.map((order, index) => (
                        <li key={index}>
                        <strong>order number:</strong> {order.order_number} <br />    
                        <strong>name:</strong> {order.username} <br />
                        <strong>email:</strong> {order.email} <br />
                        <strong>character index_001:</strong> {order.currentIndex_001} <br />
                        <strong>character index_002:</strong> {order.currentIndex_002} <br />
                        <strong>character index_003:</strong> {order.currentIndex_003} <br />
                        <strong>color degree_001:</strong> {order.degree_001} <br />
                        <strong>color degree_002:</strong> {order.degree_001} <br />
                        <strong>color degree_003:</strong> {order.degree_003} <br />
                        <strong>color theme:</strong> {order.color} <br />
                        <strong>brightness and saturation value:</strong> {order.colorValue} <br />
                        <strong>selected size:</strong> {order.selectedSize} <br />
                        <strong>created at:</strong> {order.createdAt} <br />
                        <strong>order id:</strong> {order.order_id} <br />
                        <br />
                        </li>
                    ))}
                    </ul>
                )}
            </div>

        </div>

    </div>  
)
}