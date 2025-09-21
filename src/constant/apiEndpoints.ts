
export const apiEndpoints = {
  GENERATE_TOKEN: process.env.NEXT_PUBLIC_APP_END_POINT,

  CLIENTLOGO: {
    BASE_PATH: `${process.env.NEXT_PUBLIC_API_ADMIN_PATH}${process.env.NEXT_PUBLIC_LOGO_CLIENT_PATH}`,
  },

  PARTNERLOGO: {
    BASE_PATH: `${process.env.NEXT_PUBLIC_API_ADMIN_PATH}${process.env.NEXT_PUBLIC_LOGO_PARTNER_PATH}`,
  },

  CMS: {
    PAGES: {
      BASE_PATH: `${process.env.NEXT_PUBLIC_API_ADMIN_PATH}/${process.env.NEXT_PUBLIC_CMS_PAGES_PATH}`,
      LIST: "/",
      CREATE: "/create",
      STATUS: "/status"
    }
  }
};
