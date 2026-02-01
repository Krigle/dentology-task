"use client";
import { usePatients } from "@/hooks/usePatients";

export default function Home() {
  const { patients } = usePatients();
  return (
    <div>
      <div>
        <h1>Patient View</h1>
      </div>
      <ul>
        {patients.map((p) => (
          <li key={p.id}>
            <p>{p.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
