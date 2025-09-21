import { PANNEL_URL_PATH } from "./constant";

export const appConfig = {
    DEFAULT_PAGINATION: {
        PAGE: 1,
        PER_PAGE: 10,
    },
    THEME: {
        PRIMARY_COLOR: "#3498db",
        SECONDARY_COLOR: "#2ecc71",
    },
    STATUS: {
        ACTIVE: 1,
        INACTIVE: 0,
    },
    Root_PAGE_URLS: {
        DASHBOARD: `${PANNEL_URL_PATH}/dashboard`,
        LOGIN: `${PANNEL_URL_PATH}/login`
    }
};
