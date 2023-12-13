import React, { lazy, Suspense, useState, useContext } from "react";
import ReactDOM from  "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/shimmer";
import userContext from "./utils/UseContext";

// we want to use it to depict chunking so we will import it another way using lzyload
// import Instamart from "./components/Instamart";

const Instamart = lazy(()=>import("./components/Instamart"))
const About = lazy(()=>import("./components/About"))
const AppLayout = () => {
  const [user, setUser] = useState({
    name:'Fagoon',
    email:'fagoon@gmail.com'
  })
   
  return (

    <userContext.Provider value={{
      user:user,
      setUser:setUser
    }}> 
    <Header />
    <Outlet />
    <Footer />
    </userContext.Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    errorElement:<Error />,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:"/about",
        element:(<Suspense fallback={<Shimmer />}><About/></Suspense>),
        children:[
          {
            path:"profile",
            element:<Profile/>
          }
        ]
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
      },
      {
        path:"/instamart",
        element:(
          <Suspense fallback={<Shimmer />}>
          <Instamart/>
          </Suspense> )
      }


    ]
  },
  // {
  //   path:"/about",
  //   element:<About/> since we want to use them between our header and footer we should use them as children so that header and footer 
  // is always there.
    
  // },
// This is only the config, we also need to provide it to our app.
]);

// --------------------------
// styling css using an object since jsx can only have javascript
// const styleobj = {
//   backgroundColor: "cyan",
// }

// const jsx = (
//   <div style={styleobj}>
//     <h4>Hi this is one other way to style inline css</h4>
//   </div>
// )
//-------------------------------





const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />)
root.render(<RouterProvider router={appRouter} />)



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
//----------------------------------------------------------
  //  const heading = (
  //  <h1 id="title" key='h2'>
  //   Namste React from JSX
  //   </h1>
  //  );


  //  //React components
  //  const HeaderComponent = () => {
  //   return (                                // Since this is an arrow function the return is not required if you want.
  //   <div>
  //     {heading}
  //     <h1>This is namaste react from our first header component</h1>
  //     <h2>This is in H2 tag</h2>
  //   </div>);
  //  };
//-------------------------Assignment3 code-------------------------------------
  // const nestedHeaderelement = React.createElement(
  //   'div',
  //   {
  //     id: "nestedheader",
  //     key: "nestedheader"
  //   },
  //   [React.createElement(
  //     'h1',
  //     {
  //       id: "title",
  //       key: "h1"
  //     },
  //     "Heading from h1"
  //   ),React.createElement(
  //     'h2',
  //     {
  //       id: "title",
  //       key: "h2"
  //     },
  //     "Heading from h2"
  //   ),
  //   React.createElement(
  //     'h3',
  //     {
  //       id: "title",
  //       key: "h3"
  //     },
  //     "Heading from h3"
  //   )]
  // )

  // const nestedJSXheading = (
  //   <div id="container">
  //     <h1 id='title' key='h1'>This is heading from h1</h1>
  //     <h2 id='title' key='h2'>This is heading from h2</h2>
  //     <h3 id='title' key='h3'>This is heading from h3</h3>
  //   </div>
  // )

  // const Fncomponentheading = () => {
  //   return(
      
  //   <div id="container">
  //     {nestedJSXheading}
  //   <h1 id='title' key='h1'>This is heading from h1 from functional component</h1>
  //   <h2 id='title' key='h2'>This is heading from h2 from functional component</h2>
  //   <h3 id='title' key='h3'>This is heading from h3 from functional component</h3>
  // </div>
  // );
  // }

  //----------------------------------------Assignment 3 codee --------------------------------------------
  //  const HeaderComponent2 = () => (                                // Since this is an arrow function the return is not required if you want.
  //   <div>
  //     <h1>This is namaste react from our first header component</h1>
  //     <h2>This is in H2 tag</h2>
  //   </div>
  //   );
   
   
  // console.log(heading);
  //passing a react element inside the root
  //async defer
  // root.render(container);
  // ---root.render(<HeaderComponent />) // to render a component we wrtie like this.