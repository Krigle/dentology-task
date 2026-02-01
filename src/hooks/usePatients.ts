import { usePatientStore } from "@/store/store";
import { useMemo } from "react";

export const usePatients = () => {
  const patients = usePatientStore((s) => s.patients);
  const searchQuery = usePatientStore((s) => s.searchQuery);

  const filtered = useMemo(() => {
    if (!searchQuery) return patients;
    return patients.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.id.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [patients, searchQuery]);

  return { patients: filtered, searchQuery };
};

export const usePatientActions = () =>
  usePatientStore((s) => ({
    addPatient: s.addPatient,
    removePatient: s.removePatient,
    updatePatient: s.updatePatient,
    addAppointment: s.addAppointment,
    updateAppointmentStatus: s.updateAppointmentStatus,
    removeAppointment: s.removeAppointment,
    setSearchQuery: s.setSearchQuery,
  }));
