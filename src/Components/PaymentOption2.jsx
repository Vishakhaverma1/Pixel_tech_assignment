// import React, { useState } from 'react';
// import ReactFlow, { addEdge, MiniMap, Controls, Background, MarkerType } from 'react-flow-renderer';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const initialNodes = [
//   { id: '1', type: 'input', data: { label: 'Payment Initialized' }, position: { x: 250, y: 5 } },
//   { id: '2', data: { label: 'United States' }, position: { x: 100, y: 100 } },
//   { id: '3', data: { label: 'England' }, position: { x: 400, y: 100 } },
//   { id: '4', data: { label: 'PayPal' }, position: { x: 100, y: 200 } },
//   { id: '5', data: { label: 'Stripe' }, position: { x: 250, y: 200 } },
//   { id: '6', data: { label: 'Google Pay' }, position: { x: 400, y: 200 } },
//   { id: '7', data: { label: 'Razorpay' }, position: { x: 250, y: 300 } },
//   { id: '8', data: { label: 'Paytm' }, position: { x: 400, y: 300 } },
// ];

// const invalidConnections = [
//   { source: '2', target: '7' }, // US -> Razorpay (invalid)
//   { source: '2', target: '8' }, // US -> Paytm (invalid)
//   { source: '3', target: '4' }, // England -> PayPal (invalid)
// ];

// const PaymentOption = () => {
//   const [nodes, setNodes] = useState(initialNodes);
//   const [edges, setEdges] = useState([]);
//   const [showErrorEdges, setShowErrorEdges] = useState([]); // Store invalid connections

//   // Handle adding a new connection (edge)
//   const onConnect = (params) => {
//     const isInvalid = invalidConnections.some(
//       (conn) => conn.source === params.source && conn.target === params.target
//     );

//     // If the connection is invalid, add it to the error list
//     if (isInvalid) {
//       setShowErrorEdges([
//         ...showErrorEdges,
//         {
//           ...params,
//           isError: true,
//           style: { stroke: 'red', strokeWidth: 3 }, // Red color for invalid connections
//           markerEnd: { type: MarkerType.ArrowClosed, color: 'red' },
//           animated: true, // Make the error edge animated
//         },
//       ]);
//     } else {
//       setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#222' } }, eds));
//     }
//   };

//   // Define a custom node rendering logic if required
//   const nodeTypes = {
//     custom: (node) => (
//       <div style={{ padding: 10, border: '1px solid #ddd', borderRadius: 5, background: '#fff' }}>
//         {node.data.label}
//       </div>
//     ),
//   };

//   return (
//     <div style={{ height: '500px', width: '100%' }}>
//       {/* React Flow Component */}
//       <ReactFlow
//         nodes={nodes}
//         edges={[...edges, ...showErrorEdges]} // Include both valid and error edges in the render
//         onConnect={onConnect} // Handle connections
//         fitView
//         nodeTypes={nodeTypes} // Custom node types if needed
//         style={{ backgroundColor: '#F5F5F5' }}
//       >
//         <MiniMap />
//         <Controls />
//         <Background color="#aaa" gap={16} />
//       </ReactFlow>
//     </div>
//   );
// };

// export default PaymentOption;
