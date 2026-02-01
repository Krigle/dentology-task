"use client";
import { usePatient } from "@/hooks/usePatients";
import { use } from "react";
import PatientCard from "@/components/PatientCard";
import AppointmentCard from "@/components/AppointmentCard";

export default function PatientDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const patient = usePatient(id);

  if (!patient) return <h3>Patient Not Found</h3>;

  return (
    <div className="container">
      <h1 className="page-title">{patient.name}</h1>
      <PatientCard patient={patient} />

      <h2 className="section-title">Appointments</h2>
      {patient.appointments.length === 0 ? (
        <p className="no-appointments">No appointments</p>
      ) : (
        <ul className="appointment-list">
          {patient.appointments.map((a) => (
            <AppointmentCard key={a.id} appointment={a} />
          ))}
        </ul>
      )}
    </div>
  );
}
