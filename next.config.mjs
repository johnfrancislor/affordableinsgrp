/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root; the parent folder holds other projects' lockfiles.
  turbopack: { root: import.meta.dirname },
  // No `output: "export"` here: this site keeps a Node server so it can use
  // API routes (src/app/api/*) and server actions. Pages without dynamic data
  // are still pre-rendered as static HTML at build time.

  // Keep links and search rankings from the agency's old site working.
  async redirects() {
    const legacy = {
      automobile: "/insurance/auto",
      homeowners: "/insurance/home",
      renters: "/insurance/renters",
      life: "/insurance/life",
      health: "/insurance/health",
      disability: "/insurance/disability",
      flood: "/insurance/flood",
      motorcycle: "/insurance/motorcycle",
      rv: "/insurance/recreational-vehicles",
      recreational_vehicle: "/insurance/recreational-vehicles",
      business: "/insurance/business",
      contractors: "/insurance/contractors",
      trucking: "/insurance/trucking",
      bond: "/insurance/bonds",
      bonds: "/insurance/bonds",
      surety_bond: "/insurance/bonds",
      testimonials: "/reviews",
      locations: "/contact",
      employees: "/about#team",
      customer_service: "/service-center",
      get_a_quote: "/quote",
    };
    return [
      ...Object.entries(legacy).flatMap(([from, to]) => [
        { source: `/${from}`, destination: to, permanent: true },
        { source: `/${from}/:path*`, destination: to, permanent: true },
      ]),
      { source: "/:page(about|contact|locations|employees).aspx", destination: "/:page", permanent: true },
      { source: "/default.aspx", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
