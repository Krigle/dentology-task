"use client";
import { usePatients } from "@/hooks/usePatients";
import Link from "next/link";

export default function Home() {
  const { patients } = usePatients();

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Patients</h1>
        <Link href="/appointments" className="nav-link">
          View Appointments
        </Link>
      </div>

      <div className="patient-table">
        <div className="table-header">
          <div className="table-cell">ID</div>
          <div className="table-cell">Name</div>
          <div className="table-cell">Email</div>
          <div className="table-cell">Phone</div>
        </div>
        {patients.map((p) => (
          <Link
            key={p.id}
            href={`/patients/${p.id}`}
            className="table-row-link"
          >
            <div className="table-row">
              <div className="table-cell patient-id">{p.id}</div>
              <div className="table-cell patient-name">{p.name}</div>
              <div className="table-cell patient-contact">{p.email}</div>
              <div className="table-cell patient-contact">{p.phone}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
