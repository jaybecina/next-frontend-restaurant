let API_URL: string = "";
const env = process.env.NODE_ENV;
if (env === "development") {
  API_URL = process.env.NEXT_PUBLIC_LOCAL_API_URL || "";
} else if (env === "production") {
  API_URL = process.env.NEXT_PUBLIC_PRODUCTION_API_URL || "";
}

export { API_URL };
