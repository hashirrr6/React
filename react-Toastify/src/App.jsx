import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Don't forget to import the CSS for Toastify
import { ReactNotifications } from 'react-notifications-component'


const App = () => {
  // Define the notify function that triggers the toast
  const notify = () => {
    toast("Wow so easy!");
  };

  return (
    <>
      <h1>Hello</h1>
      <button onClick={notify}>click Me!</button>

      {/* Add the ToastContainer to render the toast notifications */}
      <ToastContainer />
      <ReactNotifications/>
    </>
  );
};

export default App;
