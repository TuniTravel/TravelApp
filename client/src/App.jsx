import React from "react";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Layout from "./Layout";
import axios from "axios";
<<<<<<< HEAD
import AccountPage from "./pages/AccountPage";
axios.defaults.baseURL = "http://localhost:4000";
=======
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;
import { UserContextProvider } from "./UserContext";
>>>>>>> origin
export default function App() {

  return (
<<<<<<< HEAD
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account/:subpage" element={<AccountPage />} />
        <Route path="/account/:subpage/:action" element={<AccountPage />} />
      </Route>
    </Routes>
  );
=======
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </UserContextProvider>


  )
>>>>>>> origin
}
