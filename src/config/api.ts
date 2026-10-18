const configuredUrl = import.meta.env.VITE_API_BASE_URL

if (!configuredUrl) {
  throw new Error('VITE_API_BASE_URL is missing. Set it in .env.')
}

export const API_BASE_URL = configuredUrl
