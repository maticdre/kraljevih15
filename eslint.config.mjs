import nextConfig from "eslint-config-next";

export default [
  ...nextConfig,

  // Global ignores
  {
    ignores: [".next/**", "node_modules/**", "dist/**", "next-env.d.ts"],
  },
];