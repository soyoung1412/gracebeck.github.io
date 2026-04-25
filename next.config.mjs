const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const repoBasePath = "/gracebeck.github.io";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? repoBasePath : "",
  assetPrefix: isGithubPages ? `${repoBasePath}/` : undefined,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? repoBasePath : ""
  }
};

export default nextConfig;
