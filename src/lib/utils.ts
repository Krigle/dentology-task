import { format, parseISO } from "date-fns";

export const formatDate = (dateString: string): string => {
  return format(parseISO(dateString), "MMM d, yyyy");
};

export const formatDateTime = (dateString: string): string => {
  return format(parseISO(dateString), "MMM d, yyyy h:mm a");
};

export const generateId = (prefix: string) =>
  `${prefix}${Math.floor(Math.random() * 10000)}`;
