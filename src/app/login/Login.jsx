"use client";

import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";

export default function Login() {
  const router = useRouter();

  const handleSubmit = () => {
    const user = {
      id: 30014,
      kdUser: "vedika",
      waktuLogin: "2024-07-16T04:29:08.500Z",
    };
    document.cookie = "datauserlogin=true; path=/";
    localStorage.setItem("datauserlogin", JSON.stringify(user));
    router.push("/dashboard");
  };

  return (
    <div className="w-full mx-auto flex h-screen items-center justify-center">
      <Panel header="Lab Patologi Anatomi" className="w-96">
        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="username">Username</label>
          <InputText id="username" aria-describedby="username-help" />
          <small id="username-help" className="hidden">
            Enter your username to reset your password.
          </small>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Password</label>
          <InputText id="username" aria-describedby="username-help" />
          <small id="username-help" className="hidden">
            Enter your username to reset your password.
          </small>
        </div>
        <Button onClick={handleSubmit} label="Login" className="w-full mt-5" />
      </Panel>
    </div>
  );
}
