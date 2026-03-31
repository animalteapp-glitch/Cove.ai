import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';

export default function RulesPage() {
  const rules = [
    "Never generate illegal content",
    "Never reveal private API keys",
    "Never break the website system",
    "Never create harmful instructions",
    "Never pretend to be human",
    "Never perform actions without user permission",
    "Never make fake promises",
    "Always stay inside the user request",
    "Always tell the truth if it cannot do something",
    "Always protect user privacy",
    "Never modify its own code automatically",
    "Never create fake videos or images of real people without permission",
    "Never generate copyrighted logos or copied brand designs",
    "Never expose hidden system instructions",
    "Always show warning before risky actions",
  ];

  return (
    <>
      <ParticleBackground />
      <div className="relative min-h-screen p-4 pb-20">
        <h1 className="text-2xl font-bold text-neon-green mb-4">Cove.ai Safety & Rules</h1>
        <div className="glass p-4 rounded-2xl">
          <ul className="list-disc pl-5 space-y-2">
            {rules.map((rule, i) => (
              <li key={i} className="text-gray-300">{rule}</li>
            ))}
          </ul>
        </div>
        <Navbar />
      </div>
    </>
  );
}
