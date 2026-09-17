import React, { useState } from 'react';
import { Mail, Check, ArrowRight, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { CATEGORIES } from '../../data/articles';
import { Link } from '../../router';
import { Logo } from '../ui/Logo';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#1F4747] text-[#E5E5E5] border-t border-[#173636] pt-12 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust & Independence Announcement Bar */}
        <div className="border-b border-white/15 pb-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#E5E5E5]/90">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
            <span>
              <strong className="text-white font-semibold">100% Independent:</strong> We buy all test units with our own funds. No paid placements.
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#E5E5E5]/80 text-xs">
            <Link href="/editorial-standards" className="hover:text-white transition-colors">
              How We Test
            </Link>
            <span>•</span>
            <Link href="/affiliate-disclosure" className="hover:text-white transition-colors">
              Affiliate Disclosure
            </Link>
          </div>
        </div>

        {/* Top Newsletter & Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-white/15">
          <div className="lg:col-span-6 space-y-4">
            <Link href="/" className="inline-flex items-center group" aria-label="PickXpert Home">
              <Logo variant="on-dark" size="lg" />
            </Link>

            <p className="text-[#E5E5E5]/90 text-sm leading-relaxed max-w-md">
              Rigorous, independent product journalism. We purchase all test units at retail,
              log hundreds of hours in real test labs, and deliver uncompromised recommendations
              you can rely on for years.
            </p>

            <div className="flex items-center gap-6 text-xs text-[#E5E5E5]/80 pt-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>Zero Sponsored Reviews</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-white" />
                <span>Reader Supported</span>
              </div>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-6 bg-[#173636] rounded-2xl p-6 border border-white/15">
            <h4 className="text-white font-bold text-base mb-1">
              Field Notes: The Weekly Review Digest
            </h4>
            <p className="text-[#E5E5E5]/80 text-xs leading-relaxed mb-4">
              Get our latest lab findings, price drop alerts on top picks, and seasonal buying advice directly to your inbox every Thursday morning.
            </p>

            {isSubscribed ? (
              <div className="p-3 bg-[#122929] border border-white/20 rounded-lg flex items-center gap-2 text-white text-xs font-medium">
                <Check className="w-4 h-4 text-white" />
                <span>You're subscribed! Check your inbox for our Top 25 Lifetime Picks cheat sheet.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-[#E5E5E5]/60 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-[#122929] border border-white/20 text-sm text-white placeholder:text-[#E5E5E5]/60 focus:outline-none focus:border-white"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-white text-[#1F4747] hover:bg-[#F7F7F7] font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 shrink-0 shadow-xs"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            <span className="text-[11px] text-[#E5E5E5]/60 block mt-2">
              No spam, ever. Unsubscribe with one click anytime.
            </span>
          </div>
        </div>

        {/* Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/15 text-xs">
          <div>
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px] mb-4">
              Tested Categories
            </h5>
            <ul className="space-y-2.5">
              {CATEGORIES.slice(0, 3).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/${cat.slug}`}
                    className="text-[#E5E5E5]/80 hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px] mb-4">
              More Categories
            </h5>
            <ul className="space-y-2.5">
              {CATEGORIES.slice(3).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/${cat.slug}`}
                    className="text-[#E5E5E5]/80 hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px] mb-4">
              Editorial Standards
            </h5>
            <ul className="space-y-2.5 text-[#E5E5E5]/80">
              <li>
                <Link href="/editorial-standards" className="hover:text-white transition-colors">
                  How We Choose & Test
                </Link>
              </li>
              <li>
                <Link href="/editorial-standards#independence" className="hover:text-white transition-colors">
                  Commitment to Independence
                </Link>
              </li>
              <li>
                <Link href="/editorial-standards#corrections" className="hover:text-white transition-colors">
                  Corrections Policy
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="hover:text-white transition-colors">
                  Affiliate Disclosure Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px] mb-4">
              About PickXpert
            </h5>
            <ul className="space-y-2.5 text-[#E5E5E5]/80">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us (Our Story)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yahya-mughal-8a63413b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Founder: Yahya Mughal</span>
                </a>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure & Legal */}
        <div className="pt-8 text-xs text-[#E5E5E5]/80 space-y-4">
          <p className="leading-relaxed">
            <strong className="text-white font-semibold">Affiliate Disclosure:</strong> PickXpert is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and affiliated sites. Some links on this Site are affiliate links. If you click one of these links and make a qualifying purchase, we may earn a small commission at no additional cost to you. Read our full{' '}
            <Link href="/affiliate-disclosure" className="text-white underline hover:text-white/80 font-medium">
              Affiliate Disclosure
            </Link>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/15 text-[11px]">
            <span>© {new Date().getFullYear()} PickXpert. Founded by Yahya Mughal. All rights reserved.</span>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/affiliate-disclosure" className="hover:text-white transition-colors">
                Affiliate Disclosure
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
