import React from "react";

import "./App.css";
import SignUpAllTabs from "./components/login/SignUpAllTabs";
import Layout from "./components/yash/Layout";
import AllCustomer from "./components/yash/AllCustomer";
import CrmSettings from "./components/rahul lakhlan/CrmSettings";
import CrmTableData from "./components/rahul lakhlan/CrmTableData";
import Resourses from "./Rahuljatasra/Resourses";

function App() {
  return (
    <>
      {/* <SignUpAllTabs /> */}
      {/* <Layout>Hellow world</Layout> */}
      <Resourses />
      <CrmTableData />
      <CrmSettings />
      <AllCustomer />
    </>
  );
}

export default App;
