const BASE_URL = import.meta.env.VITE_BASE_URL;

export const submitQuotation = async (data) => {
  const res = await fetch(`${BASE_URL}/api/submit-quotation`, {
    method: "POST",
    body: data, 
  });

   const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Quotation Submitted failed");
  }

  return result;
};