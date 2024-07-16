import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";

export default function Home() {
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
        <Button label="Login" className="w-full mt-5" />
      </Panel>
    </div>
  );
}
