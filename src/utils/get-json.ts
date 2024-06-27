import { Err, Ok, Result } from "./types";

export default async function getJson<T>(url: URL): Promise<Result<T>> {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  if (!res.ok) return Err(null);
  return Ok(await res.json());
}
