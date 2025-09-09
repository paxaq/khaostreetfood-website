/** @type {import('next').NextConfig} */
const isGhActions = process.env.GITHUB_ACTIONS === 'true'
const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1]
const isUserSite = repoName ? /\.github\.io$/i.test(repoName) : false
const ghBasePath = isGhActions && repoName && !isUserSite ? `/${repoName}` : ''

const nextConfig = {
  // Produce a static export in ./out for GitHub Pages
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Prefix assets/links when deploying to GitHub Pages project sites
  basePath: ghBasePath || undefined,
  assetPrefix: ghBasePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: ghBasePath || '',
  },
}

export default nextConfig
