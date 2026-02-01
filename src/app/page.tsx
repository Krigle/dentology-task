"use client";
import { usePatients, useSetSearchQuery } from "@/hooks/usePatients";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const { patients } = usePatients();
  const setSearchQuery = useSetSearchQuery();
  const [localQuery, setLocalQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalQuery(value);
    setSearchQuery(value);
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Patients</h1>
        <Link href="/appointments" className="nav-link">
          View Appointments
        </Link>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search patients by name or ID..."
          value={localQuery}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      <div className="patient-table">
        <div className="table-header">
          <div className="table-cell">ID</div>
          <div className="table-cell">Name</div>
          <div className="table-cell">Email</div>
          <div className="table-cell">Phone</div>
        </div>
        {patients.length === 0 ? (
          <div className="no-results">
            <p>No patients found</p>
          </div>
        ) : (
          patients.map((p) => (
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
          ))
        )}
      </div>
    </div>
  );
}
