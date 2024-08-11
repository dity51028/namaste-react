import React from 'react';
import ReactDOM from 'react-dom/client'

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "hello from react"
  );

 const jsxHeading = <h1>It is jsx</h1>


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading)