/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['raw.githubusercontent.com', 'assets.pokemon.com'],
  },
  env: {
    POKEAPI_BASE_URL: 'https://pokeapi.co/api/v2',
  },
}

module.exports = nextConfig 