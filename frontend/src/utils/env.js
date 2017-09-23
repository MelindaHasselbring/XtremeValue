
export const env = e => process.env.NODE_ENV === e
export const isDev = () => env('development')
export const isProd = () => env('production')

export default {
  isDev: env('development'),
  isProd: env('production')
}
