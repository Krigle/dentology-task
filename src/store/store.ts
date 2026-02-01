import { create } from "zustand";
import { Patient, Appointment } from "@/lib/schema";
import { generateId } from "@/lib/utils";

interface PatientState {
  patients: Patient[];
  searchQuery: string;
}

interface PatientActions {
  addPatient: (patient: Omit<Patient, "id" | "appointments">) => void;
  removePatient: (id: string) => void;
  updatePatient: (id: string, data: Partial<Patient>) => void;
  addAppointment: (
    patientId: string,
    appointment: Omit<Appointment, "id">,
  ) => void;
  updateAppointmentStatus: (
    patientId: string,
    appointmentId: string,
    status: Appointment["status"],
  ) => void;
  removeAppointment: (patientId: string, appointmentId: string) => void;
  setSearchQuery: (query: string) => void;
}

export const usePatientStore = create<PatientState & PatientActions>((set) => ({
  patients: [],
  searchQuery: "",

  addPatient: (patient) =>
    set((state) => ({
      patients: [
        ...state.patients,
        { ...patient, id: generateId("P"), appointments: [] },
      ],
    })),

  removePatient: (id) =>
    set((state) => ({
      patients: state.patients.filter((p) => p.id !== id),
    })),

  updatePatient: (id, data) =>
    set((state) => ({
      patients: state.patients.map((p) =>
        p.id === id ? { ...p, ...data } : p,
      ),
    })),

  addAppointment: (patientId, appointment) =>
    set((state) => ({
      patients: state.patients.map((p) =>
        p.id === patientId
          ? {
              ...p,
              appointments: [
                ...p.appointments,
                { ...appointment, id: generateId("A") },
              ],
            }
          : p,
      ),
    })),

  updateAppointmentStatus: (patientId, appointmentId, status) =>
    set((state) => ({
      patients: state.patients.map((p) =>
        p.id === patientId
          ? {
              ...p,
              appointments: p.appointments.map((a) =>
                a.id === appointmentId ? { ...a, status } : a,
              ),
            }
          : p,
      ),
    })),

  removeAppointment: (patientId, appointmentId) =>
    set((state) => ({
      patients: state.patients.map((p) =>
        p.id === patientId
          ? {
              ...p,
              appointments: p.appointments.filter(
                (a) => a.id !== appointmentId,
              ),
            }
          : p,
      ),
    })),

  setSearchQuery: (query) => set({ searchQuery: query }),
}));
