import React, { useEffect, useState } from 'react'
import './Orders.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../../../../userFrontend/src/assets/assets'

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([])
  
  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/listorders`)
      setOrders(response.data.data)
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch orders")
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [])

  const handleStatusChange = async(orderId, status) => {
    try {
      const response = await axios.post(`${url}/api/order/status`, {
        orderId,
        status
      })
      toast.success("Status updated successfully")
      await fetchAllOrders()
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update status")
      console.log(error)
    }
  }

  return (
    <div className='order screen'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div className="order-item" key={order._id || index}>
              <img src={assets.parcel_icon} alt="" />
              <div>
                <p className='order-item-food'>
                  {order.items.map((item, itemIndex) => (
                    <span key={itemIndex}>
                      {item.name} x {item.quantity}
                      {itemIndex < order.items.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
                
                <p className="order-item-name">
                  {order.address.first_name + " " + order.address.last_name}
                </p>
                <div className="order-item-address">
                  <p>{order.address.street + ','}</p>
                  <p>
                    {order.address.city + ', ' + 
                     order.address.state + ', ' + 
                     order.address.country + ', ' + 
                     order.address.zip_code}
                  </p>
                </div>
                <p>Items: {order.items.length}</p>
                <p>₹{order.amount}</p>
                <select 
                  value={order.status} 
                  onChange={(e) => handleStatusChange(order._id, e.target.value)}
                >
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out For Delivery">Out For Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          ))
        ) : (
          <p>No orders found</p>
        )}
      </div>
    </div>
  )
}

export default Orders