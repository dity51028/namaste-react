import React from 'react';
import ReactDOM from 'react-dom/client'

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "hello from react"
  );

 const jsxHeading = <h1>It is jsx</h1>
 const Component = () => (
  <div>
    {jsxHeading}
    <h1>It's a headings</h1>
  </div>
 );

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Component/>)