import LoginForm from "@/app/(auth)/_components/LoginForm";
import React from "react";

type LoginProps = {};

const Login = (props: LoginProps) => {
  return (
    <div className="flex flex-col items-center justify-center  h-screen">
      <LoginForm />
    </div>
  );
};

export default Login;
