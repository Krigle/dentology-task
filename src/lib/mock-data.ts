import { Patient } from "./schema";

export const mockPatients: Patient[] = [
  {
    id: "P001",
    name: "John Smith",
    dateOfBirth: "1985-03-15",
    email: "john@example.com",
    phone: "555-0101",
    appointments: [
      {
        id: "A001",
        dateTime: "2026-03-01T09:00:00Z",
        type: "check-up",
        status: "scheduled",
      },
      {
        id: "A002",
        dateTime: "2026-03-15T14:00:00Z",
        type: "treatment",
        status: "attended",
      },
    ],
  },
  {
    id: "P002",
    name: "Sarah Johnson",
    dateOfBirth: "1990-07-22",
    email: "sarah@example.com",
    phone: "555-0102",
    appointments: [
      {
        id: "A003",
        dateTime: "2026-04-05T10:30:00Z",
        type: "consultation",
        status: "scheduled",
      },
    ],
  },
  {
    id: "P003",
    name: "Michael Brown",
    dateOfBirth: "1978-11-02",
    email: "michael.b@example.com",
    phone: "555-0103",
    appointments: [
      {
        id: "A004",
        dateTime: "2026-02-20T08:00:00Z",
        type: "emergency",
        status: "attended",
      },
      {
        id: "A005",
        dateTime: "2026-03-22T15:00:00Z",
        type: "check-up",
        status: "scheduled",
      },
    ],
  },
  {
    id: "P004",
    name: "Emily Davis",
    dateOfBirth: "1995-05-18",
    email: "emily.d@example.com",
    phone: "555-0104",
    appointments: [],
  },
  {
    id: "P005",
    name: "Daniel Wilson",
    dateOfBirth: "1982-08-30",
    email: "daniel.w@example.com",
    phone: "555-0105",
    appointments: [
      {
        id: "A006",
        dateTime: "2026-03-10T11:00:00Z",
        type: "treatment",
        status: "cancelled",
      },
    ],
  },
  {
    id: "P006",
    name: "Olivia Martinez",
    dateOfBirth: "1988-12-12",
    email: "olivia.m@example.com",
    phone: "555-0106",
    appointments: [
      {
        id: "A007",
        dateTime: "2026-03-12T09:30:00Z",
        type: "check-up",
        status: "scheduled",
      },
    ],
  },
  {
    id: "P007",
    name: "James Anderson",
    dateOfBirth: "1975-06-06",
    email: "james.a@example.com",
    phone: "555-0107",
    appointments: [],
  },
  {
    id: "P008",
    name: "Sophia Thomas",
    dateOfBirth: "1992-09-25",
    email: "sophia.t@example.com",
    phone: "555-0108",
    appointments: [
      {
        id: "A008",
        dateTime: "2026-03-18T14:30:00Z",
        type: "consultation",
        status: "scheduled",
      },
    ],
  },
  {
    id: "P009",
    name: "William Jackson",
    dateOfBirth: "1980-01-11",
    email: "william.j@example.com",
    phone: "555-0109",
    appointments: [
      {
        id: "A009",
        dateTime: "2026-04-01T13:00:00Z",
        type: "check-up",
        status: "scheduled",
      },
      {
        id: "A010",
        dateTime: "2026-04-10T10:00:00Z",
        type: "treatment",
        status: "scheduled",
      },
    ],
  },
  {
    id: "P010",
    name: "Ava Lee",
    dateOfBirth: "1993-03-03",
    email: "ava.l@example.com",
    phone: "555-0110",
    appointments: [],
  },
];
