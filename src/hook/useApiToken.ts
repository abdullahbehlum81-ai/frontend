// import axios from "axios";
// import { CustomError } from "@/types";
// import { handleApiError } from "@/utils/ApiError";
// import { BASEURL, apiEndpoints } from "@/constant";
// const { GENERATE_TOKEN } = apiEndpoints;
// let cachedToken: { token: string; expire: number } | null = null;
// const useApiToken = async (): Promise<{ token: string; expire: number }> => {
//   try {
//     if (cachedToken) return cachedToken;

//     const { data } = await axios.get(`${BASEURL}/api/v1/efuzone/${GENERATE_TOKEN}`, {
//       withCredentials: true,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     });
//     const token = data?.data?.token || data?.token;
//     const expire = data?.data?.expire || data?.expire;
//     if (!token) throw new Error("No token received from API");

//     cachedToken = { token, expire };
//     return cachedToken;
//   } catch (error) {
//     handleApiError({ error: error as CustomError, url: "/token/fail" });
//     return { token: "", expire: 0 };
//   }
// };

// export { useApiToken };
