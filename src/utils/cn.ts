import { twMerge, type ClassNameValue } from "tailwind-merge";

export default function cn(...classLists: ClassNameValue[]) {
  return twMerge(...classLists);
}
