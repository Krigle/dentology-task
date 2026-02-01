import { z } from "zod";

export const AppointmentSchema = z.object({
  id: z.string(),
  dateTime: z.string().refine((d) => new Date(d) > new Date()),
  type: z.enum(["consultation", "check-up", "treatment", "emergency"]),
  status: z.enum(["scheduled", "attended", "cancelled"]).default("scheduled"),
});

export const PatientSchema = z.object({
  id: z.string(),
  dateOfBirth: z.string().min(2),
  age: z.string(),
  email: z.email().optional(),
  phone: z.string().optional(),
  appointments: z.array(AppointmentSchema).default([]),
});

export type Patient = z.infer<typeof PatientSchema>;
export type Appointment = z.infer<typeof AppointmentSchema>;
