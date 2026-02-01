"use client";
import { useAppointments } from "@/hooks/usePatients";
import { formatDateTime } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AppointmentsPage() {
  const appointments = useAppointments();
  const router = useRouter();

  return (
    <div className="container">
      <div onClick={() => router.push("/")}>
        <ArrowLeft />
      </div>
      <h1 className="page-title">Appointments</h1>

      {appointments.length === 0 ? (
        <p className="no-appointments">No appointments</p>
      ) : (
        <ul className="appointment-list">
          {appointments.map((a) => (
            <li key={a.id} className="appointment-item">
              <div className="appointment-info">
                <span className="appointment-datetime">
                  {formatDateTime(a.dateTime)}
                </span>
                <span className="appointment-type">{a.type}</span>
                <span className={`appointment-status status-${a.status}`}>
                  {a.status}
                </span>
              </div>
              <div className="appointment-patient">
                {a.patientName} ({a.patientId})
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
