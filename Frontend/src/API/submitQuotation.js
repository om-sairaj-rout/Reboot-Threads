const BASE_URL = import.meta.env.VITE_BASE_URL;

export const submitQuotation = async (data) => {
  const res = await fetch(`${BASE_URL}/api/submit-quotation`, {
    method: "POST",
    credentials: "include", // 👈 important for CORS
    body: data // JSON send karne ke liye
  });

   const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Quotation Submitted failed");
  }

  return result;
};