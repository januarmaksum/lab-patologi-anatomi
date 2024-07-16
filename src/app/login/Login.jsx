"use client";

import { useState } from "react";
import { AuthServices } from "@/services/authApi";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";

export default function Login() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [payload, setPayload] = useState({
    namaUser: "",
    kataSandi: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    AuthServices.signin(payload).then((response) => {
      const data = response.data;

      const dataUserLogin = {
        id: data.id,
        kdUser: data.namaUser,
        waktuLogin: new Date(),
      };

      document.cookie = "datauserlogin=true; path=/";
      sessionStorage.setItem('datauserlogin', JSON.stringify(dataUserLogin));
      sessionStorage.setItem('pegawai', JSON.stringify(data.pegawai));
      sessionStorage.setItem('sotk_coor', JSON.stringify(data.sotk_coor));
      sessionStorage.setItem('statusCode', data.kelompokUser.kelompokUser);
      sessionStorage.setItem('authorization', response.messages['X-AUTH-TOKEN']);
      router.replace("/dashboard");
    }).catch((error) => {
      console.error('error login: ', error);
    }).finally(() => {
      setIsSubmitting(false);
      console.log('success');
    })
  };

  const { namaUser, kataSandi } = payload;

  return (
    <div className="w-full mx-auto flex h-screen items-center justify-center">
      <Panel header="Lab Patologi Anatomi" className="w-96">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mb-3">
            <label htmlFor="namaUser">Username</label>
            <InputText
              id="namaUser"
              name="namaUser"
              value={namaUser}
              onChange={handleChange}
            />
            <small className="hidden">
              Enter your username to reset your password.
            </small>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="kataSandi">Password</label>
            <InputText
              id="kataSandi"
              name="kataSandi"
              value={kataSandi}
              onChange={handleChange}
            />
            <small className="hidden">
              Enter your username to reset your password.
            </small>
          </div>
          <Button
            type="submit"
            label="Login"
            className="w-full mt-5"
            disabled={isSubmitting}
          />
        </form>
      </Panel>
    </div>
  );
}
