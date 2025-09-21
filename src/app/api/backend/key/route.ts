import { NextAppToken } from "@/service/AppService";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { APP_TOKEN } from "@/constant/api"
export async function GET() {
    const { response } = await NextAppToken();

    const cookieHeader = response.headers.get("set-cookie");

    if (cookieHeader) {
        const token = cookieHeader.split(";")[0].split("=")[1];

        (await cookies()).set(APP_TOKEN, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 3600,
        });

        return NextResponse.json({ message: "Token stored successfully" });
    }

    return NextResponse.json({ error: "Token not found" }, { status: 400 });
}