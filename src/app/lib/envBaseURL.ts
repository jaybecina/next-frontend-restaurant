let BASE_URL: string = "";
const env = process.env.NODE_ENV;
if (env === "development") {
  BASE_URL = process.env.NEXT_PUBLIC_LOCAL_API_URL || "";
} else if (env === "production") {
  BASE_URL = process.env.NEXT_PUBLIC_PRODUCTION_API_URL || "";
}

export { BASE_URL };
