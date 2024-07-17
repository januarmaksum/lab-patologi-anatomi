"use client";

import useStore from "@/store/useStore";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/logo-rsabhk.png";
import { Avatar } from "primereact/avatar";
import { Menu } from "primereact/menu";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const userData = useStore((state) => state.userData);
  const logout = useStore((state) => state.logout);
  const menuRight = useRef(null);
  const [isClient, setIsClient] = useState(false);

  const handleLogout = () => {
    logout();
    router.replace("/login");
  };

  const menuItems = [
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      command: handleLogout,
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="flex justify-between items-center sticky top-0 p-2 px-10 bg-white border-b border-b-gray-300 mb-5 z-50">
      <Image src={Logo} alt="logo" width={170} priority />
      {isClient && (
        <button
          type="button"
          className="flex gap-3 items-center cursor-pointer hover:bg-slate-100 rounded-md p-2 -mr-2"
          onClick={(event) => menuRight.current.toggle(event)}
        >
          <span>
            {userData?.pegawai?.namaLengkap === "Administrator"
              ? userData?.namaUser
              : userData?.pegawai?.namaLengkap}
          </span>
          <Avatar icon="pi pi-user" shape="circle" />
        </button>
      )}
      <Menu
        popup
        model={menuItems}
        ref={menuRight}
        id="popup_menu_right"
        popupAlignment="right"
      />
    </header>
  );
}
