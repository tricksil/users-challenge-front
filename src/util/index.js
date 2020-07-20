import { format } from 'date-fns';

export function formattedDate(date = new Date()) {
  return format(new Date(date), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
}
