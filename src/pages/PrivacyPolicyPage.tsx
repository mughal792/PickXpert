import React from 'react';
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Mail,
  ExternalLink,
  Cookie,
  UserCheck,
  Calendar,
} from 'lucide-react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Link } from '../router';
import { Badge } from '../components/ui/Badge';

export const PrivacyPolicyPage: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="border-b border-[#E5E5E5] bg-[#FAF8F5]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} className="mb-6" />

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="primary" size="sm">
                Legal & Compliance
              </Badge>
              <div className="flex items-center gap-1 text-xs text-[#666666]">
                <Calendar className="w-3.5 h-3.5" />
                <span>Last updated: {currentDate}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-editorial text-[#1A1A1A] tracking-tight leading-[1.15]">
              Privacy Policy
            </h1>

            <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-3xl">
              PickXpert ("we," "us," or "our") operates this website (the "Site"). This Privacy Policy explains how we collect, use, and protect information when you visit our Site.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="space-y-10 text-[#333333] text-base leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-4 border-b border-[#E5E5E5] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold font-editorial text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#1F4747]">1.</span> Information We Collect
            </h2>

            <div className="space-y-3 pl-2 sm:pl-4 border-l-2 border-[#1F4747]/20">
              <div>
                <h3 className="font-bold text-[#1A1A1A] text-base mb-1">
                  a) Information you provide voluntarily:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-[#444444]">
                  <li>If you subscribe to our newsletter, we collect your email address.</li>
                  <li>If you contact us directly, we collect the information you provide (name, email, message).</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-[#1A1A1A] text-base mb-1">
                  b) Information collected automatically:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-[#444444]">
                  <li>
                    Like most websites, we use cookies and similar tracking technologies to understand how visitors use our Site.
                  </li>
                  <li>
                    We use <strong>Google Analytics</strong> to collect anonymized usage data (pages visited, time on site, general location, device/browser type).
                  </li>
                  <li>
                    We use <strong>Google AdSense</strong> to display advertisements. Google and its partners may use cookies to serve ads based on your prior visits to this and other websites. You can learn more about how Google uses data at{' '}
                    <a
                      href="https://policies.google.com/technologies/partner-sites"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1F4747] underline inline-flex items-center gap-0.5 hover:text-[#173636]"
                    >
                      <span>Google Partner Sites Policy</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 border-b border-[#E5E5E5] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold font-editorial text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#1F4747]">2.</span> How We Use Your Information
            </h2>
            <p className="text-sm text-[#555555]">We use collected information to:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <li className="p-3 bg-[#FAF8F5] rounded-lg border border-[#E5E5E5]/60 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F4747]" />
                <span>Operate and improve our Site</span>
              </li>
              <li className="p-3 bg-[#FAF8F5] rounded-lg border border-[#E5E5E5]/60 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F4747]" />
                <span>Send newsletter updates (only if you've subscribed)</span>
              </li>
              <li className="p-3 bg-[#FAF8F5] rounded-lg border border-[#E5E5E5]/60 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F4747]" />
                <span>Respond to inquiries sent through our Contact page</span>
              </li>
              <li className="p-3 bg-[#FAF8F5] rounded-lg border border-[#E5E5E5]/60 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F4747]" />
                <span>Display relevant advertising through Google AdSense</span>
              </li>
              <li className="p-3 bg-[#FAF8F5] rounded-lg border border-[#E5E5E5]/60 flex items-center gap-2 sm:col-span-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F4747]" />
                <span>Analyze site traffic and user behavior in aggregate, anonymized form</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 border-b border-[#E5E5E5] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold font-editorial text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#1F4747]">3.</span> Third-Party Services
            </h2>
            <p className="text-sm text-[#555555]">
              Our Site uses the following third-party services, which may collect information as described in their own privacy policies:
            </p>
            <div className="space-y-2.5 text-sm">
              <div className="p-3.5 rounded-xl border border-[#E5E5E5] bg-white flex items-start gap-3">
                <strong className="text-[#1A1A1A] min-w-[140px]">Google AdSense</strong>
                <span className="text-[#666666]">Used for displaying advertisements based on visitor relevance.</span>
              </div>
              <div className="p-3.5 rounded-xl border border-[#E5E5E5] bg-white flex items-start gap-3">
                <strong className="text-[#1A1A1A] min-w-[140px]">Google Analytics</strong>
                <span className="text-[#666666]">Used for anonymous aggregate site traffic measurement and feature optimization.</span>
              </div>
              <div className="p-3.5 rounded-xl border border-[#E5E5E5] bg-white flex items-start gap-3">
                <strong className="text-[#1A1A1A] min-w-[140px]">Amazon Associates</strong>
                <span className="text-[#666666]">
                  When you click affiliate links, Amazon may set cookies to track referrals (see our{' '}
                  <Link href="/affiliate-disclosure" className="text-[#1F4747] underline font-medium">
                    Affiliate Disclosure
                  </Link>
                  ).
                </span>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 border-b border-[#E5E5E5] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold font-editorial text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#1F4747]">4.</span> Cookies
            </h2>
            <p className="text-sm text-[#444444]">
              Cookies are small text files stored on your device. You can disable cookies through your browser settings, though this may affect Site functionality.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 border-b border-[#E5E5E5] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold font-editorial text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#1F4747]">5.</span> Your Choices
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-[#444444]">
              <li>
                You can opt out of personalized advertising via{' '}
                <a
                  href="https://adssettings.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1F4747] underline font-medium inline-flex items-center gap-0.5 hover:text-[#173636]"
                >
                  <span>Google Ads Settings</span>
                  <ExternalLink className="w-3 h-3" />
                </a>.
              </li>
              <li>You can unsubscribe from our newsletter at any time via the link in any email we send.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 border-b border-[#E5E5E5] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold font-editorial text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#1F4747]">6.</span> Data Security
            </h2>
            <p className="text-sm text-[#444444]">
              We take reasonable measures to protect the information we collect, but no method of transmission over the internet is 100% secure.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 border-b border-[#E5E5E5] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold font-editorial text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#1F4747]">7.</span> Children's Privacy
            </h2>
            <p className="text-sm text-[#444444]">
              Our Site is not directed at children under 13, and we do not knowingly collect personal information from children.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3 border-b border-[#E5E5E5] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold font-editorial text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#1F4747]">8.</span> Changes to This Policy
            </h2>
            <p className="text-sm text-[#444444]">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4 bg-[#FAF8F5] p-6 rounded-2xl border border-[#E5E5E5]">
            <h2 className="text-xl sm:text-2xl font-bold font-editorial text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#1F4747]">9.</span> Contact Us
            </h2>
            <p className="text-sm text-[#444444]">
              If you have questions about this Privacy Policy, contact us at:
            </p>
            <div className="flex items-center gap-2">
              <a
                href="mailto:mughal792ab@gmail.com?subject=PickXpert%20Privacy%20Policy%20Inquiry"
                className="inline-flex items-center gap-2 text-[#1F4747] font-semibold text-sm hover:underline"
              >
                <Mail className="w-4 h-4" />
                <span>mughal792ab@gmail.com</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
