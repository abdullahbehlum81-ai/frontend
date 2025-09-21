import { API_VERSION_PATH, apiEndpoints, BASEURL } from "@/constant"
const { GENERATE_TOKEN } = apiEndpoints;
export async function NextAppToken() {
    const endPoint = `${BASEURL}/${API_VERSION_PATH}/${GENERATE_TOKEN}`
    const response = await fetch(endPoint, { credentials: "include" });
    return { response };
}