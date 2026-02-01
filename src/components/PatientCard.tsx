"use client";
import { Patient } from "@/lib/schema";
import { formatDate } from "@/lib/utils";

interface PatientCardProps {
  patient: Patient;
}

export default function PatientCard({ patient }: PatientCardProps) {
  return (
    <div className="patient-details">
      <p>
        <strong>DOB:</strong> {formatDate(patient.dateOfBirth)}
      </p>
      <p>
        <strong>ID:</strong> {patient.id}
      </p>
      <p>
        <strong>Email:</strong> {patient.email}
      </p>
      <p>
        <strong>Phone:</strong> {patient.phone}
      </p>
    </div>
  );
}
