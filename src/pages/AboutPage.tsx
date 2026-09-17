import React from 'react';
import {
  UtensilsCrossed,
  Dumbbell,
  PawPrint,
  Cpu,
  Laptop,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Linkedin,
  Mail,
  Scale,
  Sparkles,
} from 'lucide-react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Link } from '../router';
import { Badge } from '../components/ui/Badge';
import { PickXpertIcon } from '../components/ui/Logo';

export const AboutPage: React.FC = () => {
  const coreAreas = [
    {
      name: 'Kitchen',
      slug: 'kitchen',
      desc: 'Appliances, cookware, and everyday tools tested for durability and performance.',
      icon: <UtensilsCrossed className="w-5 h-5 text-[#1F4747]" />,
      count: 'Tested Cookware & Gear',
    },
    {
      name: 'Fitness & Home Gym',
      slug: 'fitness',
      desc: 'Equipment for building a reliable, motivating home workout routine without wasting space.',
      icon: <Dumbbell className="w-5 h-5 text-[#1F4747]" />,
      count: 'Home Training Gear',
    },
    {
      name: 'Pet Care',
      slug: 'pet-care',
      desc: 'Food, grooming gear, and essentials for dogs and cats evaluated for safety and quality.',
      icon: <PawPrint className="w-5 h-5 text-[#1F4747]" />,
      count: 'Vet-Informed Guides',
    },
    {
      name: 'Smart Home',
      slug: 'smart-home',
      desc: 'Connected devices, security hubs, and automation tools that genuinely simplify daily life.',
      icon: <Cpu className="w-5 h-5 text-[#1F4747]" />,
      count: 'Reliable Tech Reviews',
    },
    {
      name: 'Home Office',
      slug: 'home-office',
      desc: 'Ergonomic chairs, desks, monitors, and accessories for working comfortably from home.',
      icon: <Laptop className="w-5 h-5 text-[#1F4747]" />,
      count: 'Productivity Setups',
    },
    {
      name: 'Baby Essentials',
      slug: 'baby',
      desc: 'Trusted, certified picks for new and expecting parents prioritizing safety and peace of mind.',
      icon: <HeartHandshake className="w-5 h-5 text-[#1F4747]" />,
      count: 'Parent-Vetted Picks',
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Page Header & Breadcrumb */}
      <div className="border-b border-[#E5E5E5] bg-[#FAF8F5]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Breadcrumb items={[{ label: 'About Us' }]} className="mb-6" />

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="primary" size="sm">
                About PickXpert
              </Badge>
              <span className="text-xs font-semibold text-[#666666]">
                Independent Consumer Publication
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-editorial text-[#1A1A1A] tracking-tight leading-[1.15]">
              The Story Behind PickXpert
            </h1>

            <p className="text-lg sm:text-xl text-[#666666] leading-relaxed max-w-3xl font-serif italic">
              Cutting through the noise of misleading product listings and paid reviews to give people honest, practical recommendations for the products they use every day at home.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        {/* Founder Story Block */}
        <section className="prose prose-neutral max-w-none text-[#1A1A1A] text-base sm:text-lg leading-relaxed space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E5E5] shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1F4747]/5 rounded-bl-full pointer-events-none" />

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1F4747]/10 flex items-center justify-center shrink-0 text-[#1F4747]">
                <PickXpertIcon className="w-7 h-7" variant="on-light" />
              </div>
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] m-0 font-editorial">
                  Why PickXpert Exists
                </h2>
                <p className="text-[#333333] m-0 leading-relaxed">
                  PickXpert was founded by <strong className="text-[#1A1A1A] font-semibold">Yahya Mughal</strong>, with a simple goal: cut through the noise of misleading product listings and paid reviews to give people honest, practical recommendations for the products they use every day at home.
                </p>
                <p className="text-[#333333] m-0 leading-relaxed">
                  Like most people, our founder got tired of buying kitchen gadgets, fitness gear, and everyday home products based on inflated ratings and vague descriptions — only to find out later they didn't live up to the hype. PickXpert was built to fix that.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Card */}
        <section className="bg-[#FAF8F5] border border-[#E5E5E5] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F4747] block">
                Founder & Lead Editor
              </span>
              <h3 className="text-2xl font-bold font-editorial text-[#1A1A1A]">
                Yahya Mughal
              </h3>
              <p className="text-sm text-[#666666] max-w-xl leading-relaxed">
                Dedicated to honest product research, rigorous specification cross-referencing, and consumer advocacy. Focused on building a long-term, reader-first review platform.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/yahya-mughal-8a63413b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1F4747] text-white hover:bg-[#173636] font-semibold text-sm transition-all shadow-xs shrink-0 group"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
            </a>
          </div>
        </section>

        {/* Core Areas Grid */}
        <section className="space-y-6">
          <div className="border-b border-[#E5E5E5] pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4747] block mb-1">
              Coverage & Specialization
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-[#1A1A1A]">
              Six Core Areas of Home Life
            </h2>
            <p className="text-sm text-[#666666] mt-1">
              Today, PickXpert focuses on the products that directly impact your comfort, health, productivity, and everyday routines:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coreAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/${area.slug}`}
                className="p-5 rounded-xl border border-[#E5E5E5] hover:border-[#1F4747] bg-white hover:bg-[#FAF8F5]/40 transition-all group flex flex-col justify-between space-y-3"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#FAF8F5] group-hover:bg-[#1F4747]/10 transition-colors shrink-0">
                    {area.icon}
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-base text-[#1A1A1A] group-hover:text-[#1F4747] transition-colors">
                        {area.name}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-[#666666] group-hover:text-[#1F4747] group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
                <div className="pt-2 border-t border-[#E5E5E5]/60 flex items-center justify-between text-[11px] text-[#666666]">
                  <span>Explore {area.name} Guides</span>
                  <span className="font-medium text-[#1F4747]">{area.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Independence & Integrity Notice */}
        <section className="bg-[#FAF8F5] border border-[#E5E5E5] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-[#1F4747]">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="font-bold text-lg text-[#1A1A1A]">
              Our Promise of Independence
            </h3>
          </div>

          <p className="text-sm text-[#333333] leading-relaxed">
            We're a growing, independent publication. We don't accept payment for placement, and our recommendations are based on research, specifications comparison, and — where possible — hands-on testing.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-3 bg-white rounded-xl border border-[#E5E5E5] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#1F4747] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-xs font-bold text-[#1A1A1A]">Zero Paid Placements</strong>
                <span className="text-[11px] text-[#666666]">Brands cannot buy a spot in our guides.</span>
              </div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-[#E5E5E5] flex items-start gap-2.5">
              <Scale className="w-4 h-4 text-[#1F4747] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-xs font-bold text-[#1A1A1A]">Merit-Based Picks</strong>
                <span className="text-[11px] text-[#666666]">Ratings reflect real value, not commissions.</span>
              </div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-[#E5E5E5] flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#1F4747] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-xs font-bold text-[#1A1A1A]">Continuous Updates</strong>
                <span className="text-[11px] text-[#666666]">Discontinued gear is promptly removed.</span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-semibold">
            <Link
              href="/editorial-standards"
              className="text-[#1F4747] hover:underline flex items-center gap-1"
            >
              <span>Read Our Full Editorial Standards</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-[#E5E5E5]">•</span>
            <Link
              href="/affiliate-disclosure"
              className="text-[#1F4747] hover:underline flex items-center gap-1"
            >
              <span>Affiliate Disclosure</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-[#E5E5E5]">•</span>
            <Link
              href="/contact"
              className="text-[#1F4747] hover:underline flex items-center gap-1"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
