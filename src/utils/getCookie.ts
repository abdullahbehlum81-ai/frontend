function getCookie(name: string): string | undefined {
    if (typeof document === "undefined") return;
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match?.[2];
}
export { getCookie }