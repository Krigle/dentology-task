"use client";
import { Appointment } from "@/lib/schema";
import { formatDateTime } from "@/lib/utils";

interface AppointmentCardProps {
  appointment: Appointment;
}

export default function AppointmentCard({ appointment }: AppointmentCardProps) {
  return (
    <li className="appointment-item">
      {formatDateTime(appointment.dateTime)} – {appointment.type} (
      {appointment.status})
    </li>
  );
}
