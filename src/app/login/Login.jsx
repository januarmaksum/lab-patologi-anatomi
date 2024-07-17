"use client";

import { useState } from "react";
import { AuthServices } from "@/services/authApi";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { Password } from 'primereact/password';
import { InputText } from "primereact/inputtext";
import { Alert } from '@/components/Alert'
import Image from "next/image";
import Logo from '@/assets/logo-rsabhk.png';

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
      Alert.error('Gagal Login, periksa user & password Anda')
    }).finally(() => {
      setIsSubmitting(false);
      console.log('success');
    })
  };

  const { namaUser, kataSandi } = payload;

  return (
    <div className="w-full mx-auto flex h-screen items-center justify-center bg-[#f3f0f0]">
      <div className="wrapper-login p-1 w-full max-w-[500px] rounded-[50px]">
        <div className="w-full bg-white px-16 py-16 rounded-[50px]">
          <div className="flex flex-col justify-center items-center gap-5 mb-14">
            <Image src={Logo} width={250} alt="logo rsabhk" />
            <h1 className="font-extrabold text-2xl text-orange-color">Lab Patologi Anatomi</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 mb-3">
              <label htmlFor="namaUser" className="font-medium text-lg">Nama user</label>
              <InputText
                id="namaUser"
                name="namaUser"
                value={namaUser}
                onChange={handleChange}
                required
              />
              <small className="hidden">
                Enter your username to reset your password.
              </small>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="kataSandi" className="font-medium text-lg">Password</label>
              <Password
                id="kataSandi"
                name="kataSandi"
                value={kataSandi}
                onChange={handleChange}
                required
                feedback={false}
                toggleMask
                className="w-full !flex password-input-full"
              />
              <small className="hidden">
                Enter your username to reset your password.
              </small>
            </div>
            <Button
              type="submit"
              label="LOGIN"
              className="w-full mt-8 bg-primary-color border-primary-color hover:bg-primary-color/90 hover:border-primary-color/90"
              disabled={isSubmitting}
              raised
            />
          </form>
        </div>
      </div>
    </div>
  );
}
