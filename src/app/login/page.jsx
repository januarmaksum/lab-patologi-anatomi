import dynamic from "next/dynamic";

const Login = dynamic(() => import("./Login"));

export const metadata = {
  title: "Login - RSABHK",
};

export default function LoginPage() {
  return <Login />;
}
