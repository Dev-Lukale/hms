import LoginForm from "@/app/(auth)/login/LoginForm";
import React from "react";

type LoginProps = {};

const Login = (props: LoginProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8">
      <LoginForm />
    </div>
  );
};

export default Login;
