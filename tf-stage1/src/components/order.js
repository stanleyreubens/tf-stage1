const containerDiv = {
    border: "1px solid #D3D3D3",
    width: "50%",
    marginBottom: "1.5rem"
};
const mainStyle = { 
    display: "flex",
    flexDirection: "row"
};

const childDiv = {
    margin: "1.5rem"
};
const headerStyle = {
    marginLeft: "1.5rem"
}

const Order = (props) => {
    let status = props.order.orderStatus;
    let statusColour;
    (status === 'complete') ? statusColour = 'green' : statusColour = 'blue';
    return (
        <div style={ containerDiv }>
            <h2 style={headerStyle} >
                { props.order.productName }
            </h2>
            <div  style={mainStyle}>
                <div style={childDiv}>
                    <p>
                        Order Date
                    </p>
                    <p>
                        { props.order.dateOrdered }
                    </p>
                </div>
                <div style={childDiv}>
                    <p>
                        Order Status
                    </p>
                    <p style={{color: statusColour}}>
                        { props.order.orderStatus }
                    </p>
                </div>
            </div>
        </div>
    )
};
export default Order;