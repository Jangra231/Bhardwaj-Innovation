import { notFound } from "next/navigation";
import Link from "next/link";
import { partnerDetails } from "@/lib/data/partners";

export default async function PartnerDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const partner = partnerDetails.find(
    (item) => item.id === slug
  );

  if (!partner) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative h-125 overflow-hidden">
        <img
          src={partner.image}
          alt={partner.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
          <div className="max-w-3xl text-white">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">
              {partner.category}
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-black">
              {partner.title}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 leading-8">
              {partner.shortDesc}
            </p>

          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl">

          <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
            About Our Engagement
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900">
            Supporting Better Operations Through Technology
          </h2>

          <p className="mt-6 text-slate-600 leading-8 text-lg">
            {partner.longDesc}
          </p>

        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
            Our Capabilities
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900">
            Key Solutions & Capabilities
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {partner.features.map((feature) => (
              <div
                key={feature}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 font-bold">
                  ✓
                </div>

                <h3 className="mt-4 font-bold text-slate-800">
                  {feature}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Applications */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
          Areas We Support
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900">
          Applications & Operations
        </h2>

        <div className="flex flex-wrap gap-3 mt-10">
          {partner.applications.map((application) => (
            <span
              key={application}
              className="px-5 py-3 rounded-full bg-sky-50 text-sky-600 font-semibold border border-sky-100"
            >
              {application}
            </span>
          ))}
        </div>

      </section>

      {/* Back */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-sky-600 transition-colors"
          >
            ← Back to About Us
          </Link>
        </div>
      </section>

    </main>
  );
}