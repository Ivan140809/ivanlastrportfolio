
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex flex-col gap-10">
          <header className="flex flex-col gap-4">
            <p className="text-sm text-white/60">ivanlastra.dev</p>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Iván Lastra
              <span className="text-white/60"> — Cybersecurity</span>
            </h1>

            <p className="max-w-2xl text-base sm:text-lg text-white/70">
              Systems Engineering student building a professional security portfolio:
              home labs, web pentesting, detection, hardening, and automation.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                className="rounded-xl bg-white text-black px-5 py-3 font-semibold hover:opacity-90"
                href="#projects"
              >
                View Projects
              </a>
              <a
                className="rounded-xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/5"
                href="#labs"
              >
                Labs & Write-ups
              </a>
              <a
                className="rounded-xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/5"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </header>

          <section id="projects" className="pt-10">
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Card
                title="Hybrid Home Lab (VirtualBox + VMware + Docker)"
                desc="Segmented lab with Windows Server + Ubuntu vulnerable hosts, and OWASP apps in Docker. Built for realistic attack & defense."
                tags={["Networking", "Docker", "AD (future)", "SIEM (future)"]}
              />
              <Card
                title="Web Pentesting Practice (Burp, Nikto, ZAP)"
                desc="Methodical testing workflow: recon → enum → exploit → remediation notes. Focus on OWASP Top 10."
                tags={["Burp Suite", "Nikto", "OWASP"]}
              />
            </div>
          </section>

          <section id="labs" className="pt-10">
            <h2 className="text-2xl font-semibold">Labs & Write-ups</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Short, readable technical notes: what I tried, what worked, what I fixed,
              and how I would defend it in a real environment.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Card
                title="Apache Hardening vs Info Disclosure"
                desc="Fixing config errors, exposing/limiting server tokens, and validating with configtest + logs."
                tags={["Linux", "Apache", "Hardening"]}
              />
              <Card
                title="DNS + Deploy: Cloudflare + Vercel"
                desc="From domain purchase to production deploy with HTTPS, proper DNS records, and clean setup."
                tags={["Cloudflare", "Vercel", "DevSecOps"]}
              />
            </div>
          </section>

          <section id="contact" className="pt-10">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-2 text-white/70">
              GitHub / LinkedIn (add your links). Email will be added later with SPF/DKIM/DMARC.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a className="rounded-xl border border-white/20 px-5 py-3 hover:bg-white/5" href="https://github.com/" target="_blank" rel="noopener">
                GitHub
              </a>
              <a className="rounded-xl border border-white/20 px-5 py-3 hover:bg-white/5" href="https://www.linkedin.com/" target="_blank" rel="noopener">
                LinkedIn
              </a>
            </div>
          </section>

          <footer className="pt-16 text-sm text-white/40">
            © {new Date().getFullYear()} Iván Lastra 
          </footer>
        </div>
      </div>
    </main>
  );
}

function Card({
  title,
  desc,
  tags,
}: {
  title: string;
  desc: string;
  tags: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs rounded-full border border-white/15 bg-black/30 px-3 py-1 text-white/70"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
