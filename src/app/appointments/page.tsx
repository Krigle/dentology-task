import { usePatient } from "@/hooks/usePatients";
import { formatDate, formatDateTime } from "@/lib/utils";

export default function PatientDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const patient = usePatient(params.id);

  if (!patient) return <h3>Patient Not Found</h3>;

  return (
    <>
      <h1>{patient.name}</h1>
      <p>DOB: {formatDate(patient.dateOfBirth)}</p>
      <p>ID: {patient.id}</p>

      <h2>Appointments</h2>
      {patient.appointments.length === 0 ? (
        <p>No appointments</p>
      ) : (
        <ul>
          {patient.appointments.map((a) => (
            <li key={a.id}>
              {formatDateTime(a.dateTime)} – {a.type} ({a.status})
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
