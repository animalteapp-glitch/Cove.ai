import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';

export default function TermsPage() {
  return (
    <>
      <ParticleBackground />
      <div className="relative min-h-screen p-4 pb-20">
        <h1 className="text-2xl font-bold text-neon-green mb-4">Terms & Conditions</h1>
        <div className="glass p-4 rounded-2xl space-y-4">
          <section>
            <h2 className="text-lg font-semibold">User Responsibility</h2>
            <p className="text-sm text-gray-300">You are responsible for all content you generate using Cove.ai.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold">Privacy Policy</h2>
            <p className="text-sm text-gray-300">We respect your privacy. Data is encrypted and never shared.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold">Content Ownership</h2>
            <p className="text-sm text-gray-300">You own the content you create. However, AI-generated outputs may be used by us for improvement.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold">Prohibited Use</h2>
            <p className="text-sm text-gray-300">No illegal, harmful, or abusive content allowed.</p>
          </section>
        </div>
        <Navbar />
      </div>
    </>
  );
}
