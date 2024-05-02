import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "../Layout/Header";
import AllUsers from "../Components/AllUsers";

import SingleUsers from "../Components/SingleUsers";
import FormInput from "../Components/Form/FormInput";



const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes classname="fill_form">
        <Route path="shop" element={<AllUsers /> }/>
        <Route path="shop/singleusers/:id" element={<SingleUsers /> }/>
        <Route path="" element={<FormInput/>}/>
      </Routes>
    </Router>
  );
};

export default Routing;
