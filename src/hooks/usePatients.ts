"use client";
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

export const usePatient = (id: string) =>
  usePatientStore((s) => s.patients.find((p) => p.id === id));

export const useAppointments = () => {
  const patients = usePatientStore((s) => s.patients);

  const appointments = useMemo(() => {
    return patients.flatMap((p) =>
      p.appointments.map((a) => ({
        ...a,
        patientId: p.id,
        patientName: p.name,
      })),
    );
  }, [patients]);

  return appointments;
};

export const useSetSearchQuery = () => {
  return usePatientStore((s) => s.setSearchQuery);
};
