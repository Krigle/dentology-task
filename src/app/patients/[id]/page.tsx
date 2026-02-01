"use client";
import { usePatient, useRemovePatient } from "@/hooks/usePatients";
import { use } from "react";
import PatientCard from "@/components/PatientCard";
import AppointmentCard from "@/components/AppointmentCard";
import { usePatientStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function PatientDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const patient = usePatient(id);
  const removePatient = useRemovePatient();
  const router = useRouter();

  const handleRemovePatient = () => {
    removePatient(id);
    router.push("/");
  };

  if (!patient) return <h3>Patient Not Found</h3>;

  return (
    <div className="container">
      <div onClick={() => router.push("/")}>
        <ArrowLeft />
      </div>
      <h1 className="page-title">{patient.name}</h1>
      <button className="btn-primary" onClick={handleRemovePatient}>
        Remove Patient
      </button>
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
