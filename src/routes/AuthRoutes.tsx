import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/SignIn";

const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="sign-in" />} />
      <Route path="*" element={<div>404</div>} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignIn />} />
    </Routes>
  );
};

export default AuthRoutes;
