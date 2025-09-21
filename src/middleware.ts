// src/middleware.ts
import { APP_TOKEN } from "@/constant";
import { NextRequest, NextResponse } from "next/server";
import { NextAppToken } from "@/service/AppService";

export async function middleware(req: NextRequest) {
    // 1. Agar cookie already hai → proceed
    const token = req.cookies.get(APP_TOKEN);
    if (token) {
        return NextResponse.next();
    }

    console.log("No token found, generating...");

    try {

        const { response, jsonData } = await NextAppToken();

        if (!response?.ok || !jsonData?.success) {
            console.error("Token generation failed");
            return NextResponse.next();
        }

        const setCookie = response.headers.get("set-cookie");
        if (setCookie) {
            const res = NextResponse.next();
            res.headers.set("set-cookie", setCookie);
            console.log("Token cookie set via Laravel header");
            return res;
        }

        console.error("No Set-Cookie header from Laravel");
        return NextResponse.next();
    } catch (e) {
        console.error("Middleware error:", e);
        return NextResponse.next();
    }
}

export const config = {
    matcher: ["/((?!api/).*)"], 
};
