// App.js
import React from 'react';
import PaymentOptions from './Components/paymentOption';

function App() {
  return (

        <div
          style={{
            width: '800px',
            height: '600px',
            border: '1px solid #ddd',
            overflow: 'hidden',
            margin: '20px auto',
          }}
        >
          {/* Ensure interactive elements are wrapped correctly */}
          <PaymentOptions />
        </div>
  );
}

export default App;
