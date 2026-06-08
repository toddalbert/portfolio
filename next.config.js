/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // Old single-book URL → permanent home of this title.
        source: '/book',
        destination: '/books/out-of-the-fish-tank',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
