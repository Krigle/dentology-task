"use client";
import { usePatients, useSetSearchQuery } from "@/hooks/usePatients";
import Link from "next/link";
import { useState } from "react";
import { Plus } from "lucide-react";
import Modal from "@/components/Modal";
import AddPatientForm from "@/components/AddPatientForm";

export default function Home() {
  const { patients } = usePatients();
  const setSearchQuery = useSetSearchQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Patients</h1>
        <div className="header-actions">
          <button
            className="btn-add-patient"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus size={18} />
            Add Patient
          </button>
          <Link href="/appointments" className="nav-link">
            View Appointments
          </Link>
        </div>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search patients by name or ID..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setSearchQuery(e.target.value);
          }}
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

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Patient"
      >
        <AddPatientForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}
