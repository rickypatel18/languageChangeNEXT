import type { NextConfig } from "next";
// eslint-disable-next-line @typescript-eslint/no-require-imports
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
