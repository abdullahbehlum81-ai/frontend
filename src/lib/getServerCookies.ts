import { cookies } from "next/headers";
import { APP_TOKEN, ADMIN_AUTH_TOKEN } from "@/constant";

export async function getServerCookies(): Promise<string> {
    const cookieStore = await cookies();
    const appToken = cookieStore.get(APP_TOKEN)?.value ?? "";
    const adminToken = cookieStore.get(ADMIN_AUTH_TOKEN)?.value ?? "";
    return `efuzone_app_token=${appToken}; efuzone_root_token=${adminToken}`;
}
export async function findServerCookies() {
    const cookieStore = await cookies();
    const appToken = cookieStore.get(APP_TOKEN)?.name ?? "";
    const adminToken = cookieStore.get(ADMIN_AUTH_TOKEN)?.name ?? "";
    return { adminToken, appToken }
}