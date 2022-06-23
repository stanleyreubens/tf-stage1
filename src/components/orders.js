import { useEffect, useState } from "react";
import ordersData from "../orders.json";
import Order from "./order";

const ordersHeading = {
    display: "flex",
    flexDirection: "row",
    marginTop: "2.0rem",
    marginBottom: "1.0rem"
};

const filterDiv = {
    display: "flex",
    flexDirection: "row",
    marginBottom: "1.0rem",
    marginLeft: "4rem"
};

const filterButton = {
    display: "flex",
    flexDirection: "row",
    marginBottom: "1.0rem",
    marginLeft: "1rem"
};


const Orders = () => { 
    const [orders, setOrders] = useState([])
    const [showReset, setShowReset] = useState(false)

    useEffect(() => {
        setOrders(ordersData)
        document.title = `(${ordersData.length}) My Orders`
    }, [])
    const acceptedHandler = () => {
        const newOrders = ordersData.filter(order => order.orderStatus === 'accepted');
        setOrders(newOrders)
        setShowReset(true)
        document.title = `(${newOrders.length}) My Orders`
    }
    const inProgressHandler = () => {
        const newOrders = ordersData.filter(order => order.orderStatus === 'inProgress');
        setOrders(newOrders)
        setShowReset(true)
        document.title = `(${newOrders.length}) My Orders`
    }
    const completeHandler = () => {
        const newOrders = ordersData.filter(order => order.orderStatus === 'complete');
        setOrders(newOrders)
        setShowReset(true)
        document.title = `(${newOrders.length}) My Orders`
    }
    const resetOrdersHandler = () => {
        setOrders(ordersData)
        setShowReset(false)
        document.title = `(${ordersData.length}) My Orders`
    }
    return (
        <div>
            <div style={ ordersHeading }>
                <div>
                    <h1>
                        Orders
                    </h1>
                </div>
                <div style={ filterDiv }>
                    <button style={ filterButton } onClick={acceptedHandler}>
                        Accepted
                    </button>
                    <button style={ filterButton } onClick={inProgressHandler}>
                        In Progress
                    </button>
                    <button style={ filterButton } onClick={completeHandler}>
                        Complete
                    </button>
                    {showReset && (<button style={ filterButton } onClick={resetOrdersHandler}>
                        X
                    </button>)}
                </div>
            </div>
            <div>
                {orders.map((order, index) => (
                <Order order={order} key={index} />
            ))}
            </div>
        </div>
    )
};
export default Orders;