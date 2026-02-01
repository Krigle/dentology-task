"use client";
import { useState } from "react";
import { useAddPatient } from "@/hooks/usePatients";

export default function AddPatientForm({
  onSuccess,
}: {
  onSuccess: () => void;
}) {
  const addPatient = useAddPatient();
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPatient({
      name: formData.name,
      dateOfBirth: formData.dateOfBirth,
      email: formData.email || undefined,
      phone: formData.phone || undefined,
    });
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="add-patient-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          placeholder="Enter patient name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={(e) =>
            setFormData({ ...formData, dateOfBirth: e.target.value })
          }
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email (optional)</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Enter email address"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone (optional)</label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="Enter phone number"
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary">
          Add Patient
        </button>
      </div>
    </form>
  );
}
