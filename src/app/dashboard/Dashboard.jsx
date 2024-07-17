"use client";

import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Panel } from "primereact/panel";
import { useState } from "react";

const dataDummy = [
  {
    nocm: "410772",
    namapasien: "Hamidah Basmallah Munawar",
    noregistrasi: "0124004821",
    tglregistrasi: "2024-01-19 14:39:47",
    tglorder: "2024-06-10 08:46:20",
    noorder: "L240600001368263",
    ruanganid: 495,
    namaruanganasal: "Ruang Gambir",
    dokterdpjp: "-",
  },
  {
    nocm: "410772",
    namapasien: "Hamidah Basmallah Munawar",
    noregistrasi: "0124004821",
    tglregistrasi: "2024-01-19 14:39:47",
    tglorder: "2024-06-10 08:46:20",
    noorder: "L240600001368263",
    ruanganid: 495,
    namaruanganasal: "Ruang Gambir",
    dokterdpjp: "-",
  },
  {
    nocm: "410772",
    namapasien: "Hamidah Basmallah Munawar",
    noregistrasi: "0124004821",
    tglregistrasi: "2024-01-19 14:39:47",
    tglorder: "2024-06-10 08:46:20",
    noorder: "L240600001368263",
    ruanganid: 495,
    namaruanganasal: "Ruang Gambir",
    dokterdpjp: "-",
  },
  {
    nocm: "410772",
    namapasien: "Hamidah Basmallah Munawar",
    noregistrasi: "0124004821",
    tglregistrasi: "2024-01-19 14:39:47",
    tglorder: "2024-06-10 08:46:20",
    noorder: "L240600001368263",
    ruanganid: 495,
    namaruanganasal: "Ruang Gambir",
    dokterdpjp: "-",
  },
  {
    nocm: "410772",
    namapasien: "Hamidah Basmallah Munawar",
    noregistrasi: "0124004821",
    tglregistrasi: "2024-01-19 14:39:47",
    tglorder: "2024-06-10 08:46:20",
    noorder: "L240600001368263",
    ruanganid: 495,
    namaruanganasal: "Ruang Gambir",
    dokterdpjp: "-",
  },
  {
    nocm: "410772",
    namapasien: "Hamidah Basmallah Munawar",
    noregistrasi: "0124004821",
    tglregistrasi: "2024-01-19 14:39:47",
    tglorder: "2024-06-10 08:46:20",
    noorder: "L240600001368263",
    ruanganid: 495,
    namaruanganasal: "Ruang Gambir",
    dokterdpjp: "-",
  },
];

export default function Dashboard() {
  const [dataLab, setDataLab] = useState(dataDummy);

  return (
    <div className="w-full mx-auto flex h-screen items-center justify-center">
      <div className="px-11 mx-auto w-full">
        <Panel header="Data Lab Patologi" className="shadow-lg relative">
          <div className="mb-5">
            <Button label="Tambah Data" />
          </div>
          <DataTable
            value={dataLab}
            paginator
            rows={5}
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} results"
            paginatorTemplate="CurrentPageReport PrevPageLink PageLinks NextPageLink"
          >
            <Column field="nocm" header="Nocm"></Column>
            <Column field="namapasien" header="Nama Pasien"></Column>
            <Column field="noregistrasi" header="Noregistrasi"></Column>
            <Column field="tglregistrasi" header="Tgl Registrasi"></Column>
            <Column field="tglorder" header="Tgl Order"></Column>
            <Column field="noorder" header="No order"></Column>
            <Column field="namaruanganasal" header="Nama Ruangan Asal"></Column>
            <Column field="dokterdpjp" header="Dokter DPJP"></Column>
          </DataTable>
        </Panel>
      </div>
    </div>
  );
}
