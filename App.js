import React from "react"
import ReactDOM from  "react-dom/client"
// const heading = React.createElement(
//     "h1",
//     {
//       id: "title",
//       key: "h2"
//     },
//     "Namaste React from CreateElement"
//   );
  // const heading2 = React.createElement(
  //   "h2",
  //   {
  //     id: "title",
  //   },
  //   "Heading 2"
  // );
  // const container = React.createElement(
  //   "div",
  //   {
  //     id: "container",
  //   },
  //   [heading, heading2]
  // );

   const heading = (
   <h1 id="title" key='h2'>
    Namste React from JSX
    </h1>
   );


   //React components
   const HeaderComponent = () => {
    return (                                // Since this is an arrow function the return is not required if you want.
    <div>
      {heading}
      <h1>This is namaste react from our first header component</h1>
      <h2>This is in H2 tag</h2>
    </div>);
   };


  //  const HeaderComponent2 = () => (                                // Since this is an arrow function the return is not required if you want.
  //   <div>
  //     <h1>This is namaste react from our first header component</h1>
  //     <h2>This is in H2 tag</h2>
  //   </div>
  //   );
   
   
  // console.log(heading);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  //passing a react element inside the root
  //async defer
  // root.render(container);
  root.render(<HeaderComponent />) // to render a component we wrtie like this.