import LoginForm from "@/app/(auth)/_components/LoginForm";
import { Card } from "@/components/ui/card";
import React from "react";

type LoginProps = {};

const Login = (props: LoginProps) => {
  return (
    <div >
      <div className="grid lg:grid-cols-2 gap-4 bg-gradient-to-r from-primary/80 to-primary sm:p-8 p-4 h-[320px]">
        <div>
          <a href="javascript:void(0)">
            <img
              src="https://readymadeui.com/readymadeui-white.svg"
              alt="logo"
              className="w-40"
            />
          </a>
          <div className="max-w-lg mt-16 px-6 max-lg:hidden">
            <h3 className="text-3xl font-bold text-white">Sign in</h3>
            <p className="text-sm mt-4 text-white">
              Embark on a seamless journey as you sign in to your account.
              Unlock a realm of opportunities and possibilities that await you.
            </p>
          </div>
        </div>
        <Card className="bg-secondary my-4  sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
      
          <LoginForm/>
        </Card>
      </div>
    </div>
  );
};

export default Login;
