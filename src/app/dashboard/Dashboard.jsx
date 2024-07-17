"use client";

import { useEffect, useState } from "react";
import { LabServices } from "@/services/labApi";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { alert } from "@/components/Alert";
import dummyData from '@/data/dummyDataLab.json';

export default function Dashboard() {
  const [dataLab, setDataLab] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await LabServices.getDataLab();
        setDataLab(result.data);
      } catch {
        alert.error("Data tidak ditemukan");
        setDataLab(dummyData.data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full mx-auto flex items-center justify-center">
      <div className="px-10 mx-auto w-full">
        <div className="border border-gray-300 rounded-lg bg-white">
          <div className="px-3 py-3 flex gap-3">
            <Button label="Tambah Data" />
          </div>
          <DataTable
            className="k-table"
            dataKey="nocm"
            value={dataLab}
            totalRecords={dataLab.length}
            paginator
            rows={5}
            rowHover
            emptyMessage="Data tidak ditemukan"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} results"
            paginatorTemplate="CurrentPageReport PrevPageLink PageLinks NextPageLink"
          >
            <Column header="#" body={(_data, options) => options.rowIndex + 1}></Column>
            <Column field="nocm" header="Nocm"></Column>
            <Column field="namapasien" header="Nama Pasien"></Column>
            <Column field="noregistrasi" header="Noregistrasi"></Column>
            <Column field="tglregistrasi" header="Tgl Registrasi"></Column>
            <Column field="tglorder" header="Tgl Order"></Column>
            <Column field="noorder" header="No order"></Column>
            <Column field="namaruanganasal" header="Nama Ruangan Asal"></Column>
            <Column field="dokterdpjp" header="Dokter DPJP"></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
}
