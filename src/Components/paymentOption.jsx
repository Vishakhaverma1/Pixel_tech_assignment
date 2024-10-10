import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable'; // Import Draggable
import 'bootstrap/dist/css/bootstrap.min.css';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css'; // Ensure you import this for resizable functionality

const PaymentOption = () => {
  const [selectedGateways, setSelectedGateways] = useState([]);

  useEffect(() => {
    // Load selected gateways from local storage on component mount
    const savedGateways = JSON.parse(localStorage.getItem('selectedGateways'));
    if (savedGateways) {
      setSelectedGateways(savedGateways);
    }
  }, []);

  const handleDropdownChange = (e) => {
    const value = e.target.value;
    // Check if a new gateway is selected and add it to the list if not already present
    if (value && !selectedGateways.includes(value)) {
      const updatedGateways = [...selectedGateways, value];
      setSelectedGateways(updatedGateways);
      localStorage.setItem('selectedGateways', JSON.stringify(updatedGateways));
    }
  };

  const removeGateway = (gateway) => {
    // Remove the selected gateway from the list
    const updatedGateways = selectedGateways.filter((item) => item !== gateway);
    setSelectedGateways(updatedGateways);
    localStorage.setItem('selectedGateways', JSON.stringify(updatedGateways));
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Dropdown for Payment Gateway selection */}
      <label htmlFor="paymentGateway" style={{ marginRight: '10px' }}>Choose a Payment Gateway:</label>
      <select
        id="paymentGateway"
        onChange={handleDropdownChange}
        className="interactive-element" // Add this class to exclude it from transform effects
        style={{ padding: '5px', zIndex: 10 }}  /* Add zIndex to ensure dropdown is clickable */
      >
        <option value="">--Select--</option>
        <option value="PayPal">PayPal</option>
        <option value="Stripe">Stripe</option>
        <option value="Square">Square</option>
        <option value="Razorpay">Razorpay</option>
        <option value="Paytm">Paytm</option>
      </select>

      {/* Canvas area for draggable buttons */}
      <div
        style={{
          width: '100%', // Set the desired width for the drag area
          height: '400px',
          border: '1px solid #ddd',
          position: 'relative', // Make this the bounding parent container for draggable elements
        }}
      >

        <Draggable bounds="parent">
          {/* Resizable Payment Button */}
          <ResizableBox
            width={200}
            height={50}
            minConstraints={[100, 30]}
            maxConstraints={[400, 100]}
            resizeHandles={['n', 'e', 's', 'w', 'ne', 'nw', 'se', 'sw']}
          >
            <button
              style={{
                border: '1px solid purple',
                width: '100%',
                height: '100%',
                cursor: 'move',  // Indicates draggable element
              }}
            >
              Payment initialize<br />
              10$
            </button>
          </ResizableBox>
        </Draggable>

        {/* Resizable and Draggable Currency Buttons */}
        <Draggable bounds="parent">
          <ResizableBox
            width={120}
            height={50}
            minConstraints={[100, 30]}
            maxConstraints={[200, 100]}
            resizeHandles={['n', 'e', 's', 'w', 'ne', 'nw', 'se', 'sw']}
          >
            <button style={{ border: '2px solid black', width: '100%', height: '100%', padding: '5px' }}>
              United States
              <p>$</p>
            </button>
          </ResizableBox>
        </Draggable>

        <Draggable bounds="parent">
          <ResizableBox
            width={120}
            height={50}
            minConstraints={[100, 30]}
            maxConstraints={[200, 100]}
            resizeHandles={['n', 'e', 's', 'w', 'ne', 'nw', 'se', 'sw']}
          >
            <button style={{ border: '2px solid black', width: '100%', height: '100%', padding: '5px' }}>
              England
              <p>&#8364;</p>
            </button>
          </ResizableBox>
        </Draggable>

        {/* Resizable and Draggable Payment Gateways */}
        {selectedGateways.map((gateway, index) => (
          <Draggable
            key={index}
            defaultPosition={{
              x: 50 * (index + 1),
              y: 50 * (index + 1),
            }}
            bounds="parent"  // Restrict dragging within parent container
          >
            <ResizableBox
              width={200}
              height={50}
              minConstraints={[100, 30]}
              maxConstraints={[400, 100]}
              resizeHandles={['n', 'e', 's', 'w', 'ne', 'nw', 'se', 'sw']}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 20px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  borderRadius: '25px',
                  cursor: 'move',  // Show move cursor
                  width: '100%',
                  height: '100%',
                }}
              >
                <span>{gateway}</span>
                <span
                  style={{
                    marginLeft: '10px',
                    background: 'red',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'white',
                  }}
                  onClick={() => removeGateway(gateway)}
                >
                  &times;
                </span>
              </div>
            </ResizableBox>
          </Draggable>
        ))}
      </div>
 
    </div>
  );
};

export default PaymentOption;
