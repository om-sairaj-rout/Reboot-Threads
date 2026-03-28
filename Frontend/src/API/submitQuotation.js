const BASE_URL = import.meta.env.VITE_BASE_URL;

export const submitQuotation = async (data) => {
  // Yaha headers manually set mat karna (No Content-Type needed for FormData)
  const res = await fetch(`${BASE_URL}/api/submit-quotation`, {
    method: "POST",
    credentials: "include", 
    body: data // Direct FormData object bhejein
  });

  // Check if response is JSON before parsing
  const contentType = res.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    const result = await res.json();
    if (!res.ok) {
      throw new Error(result.message || "Quotation Submission failed");
    }
    return result;
  } else {
    // Agar server HTML error page bhej raha hai (jo 500 error mein hota hai)
    throw new Error("Server Error: Check backend logs");
  }
};