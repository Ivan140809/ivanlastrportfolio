"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = Array(Math.floor(columns)).fill(1);

    function draw() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0f0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none opacity-20"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-16">
          <header className="flex flex-col gap-6 pt-10">
            <div className="inline-flex items-center gap-2 text-sm font-mono">
              <span className="text-green-400">root@security:~$</span>
              <span className="text-white/60">whoami</span>
            </div>

            <h1 className="text-1xl sm:text-7xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                Iván Santiago Lastra
              </span>
              <br />
              <span className="text-white/80 text-3xl sm:text-5xl">
                     Cybersecurity Portfolio | Red & Blue Team Labs and Projects
              </span>
            </h1>

            <p className="max-w-1xl text-base sm:text-xl text-white/70 leading-relaxed">
              Systems Engineering student specializing in{""}
              <span className="text-green-400 font-semibold"> Offensive security</span>,{" "}
              <span className="text-cyan-400 font-semibold">Penetration testing</span>, and{" "}
              <span className="text-blue-400 font-semibold">Security automation</span>.
               Focus areas include web application security (OWASP Top 10), Linux and Windows hardening, and hands-on security labs in controlled environments. I document my methodology, findings, and mitigation strategies as technical write-ups.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                className="group rounded-xl bg-gradient-to-r from-green-500 to-cyan-500 text-black px-6 py-3 font-bold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
                href="#projects"
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>
              <a
                className="rounded-xl border-2 border-green-500/30 bg-black/40 backdrop-blur px-6 py-3 font-semibold hover:border-green-500 hover:bg-green-500/10 transition-all"
                href="#labs"
              >
                Labs & Write-ups
              </a>
              <a
                className="rounded-xl border-2 border-cyan-500/30 bg-black/40 backdrop-blur px-6 py-3 font-semibold hover:border-cyan-500 hover:bg-cyan-500/10 transition-all"
                href="#contact"
              >
                Contact Me
              </a>
            </div>
          </header>

          <section className="grid sm:grid-cols-3 gap-4">
            <StatCard number="10+" label="Security Labs" icon="🔐" />
            <StatCard number="5+" label="Projects" icon="⚡" />
            <StatCard number="OWASP" label="Top 10 Focus" icon="🎯" />
          </section>

          <section id="projects" className="pt-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-cyan-500"></div>
              <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <ProjectCard
                title="Hybrid Home Lab"
                subtitle="Multi-Platform Security Environment"
                desc="Advanced segmented network with VirtualBox, VMware, and Docker. Simulating enterprise infrastructure with Windows Server, vulnerable Ubuntu hosts, and containerized OWASP applications for realistic red/blue team exercises."
                tags={["Networking", "Virtualization", "Docker", "Active Directory"]}
                severity="high"
              />
              <ProjectCard
                title="Web Application Pentesting"
                subtitle="OWASP Top 10 Exploitation"
                desc="Comprehensive penetration testing methodology using Burp Suite, Nikto, and OWASP ZAP. Full workflow from reconnaissance and enumeration to exploitation and remediation documentation."
                tags={["Burp Suite", "OWASP ZAP", "SQL Injection", "XSS"]}
                severity="critical"
              />
              <ProjectCard
                title="Network Security Monitoring"
                subtitle="Detection & Response Lab"
                desc="Building a SIEM environment with log aggregation, alert rules, and threat detection. Analyzing attack patterns and creating custom detection signatures."
                tags={["SIEM", "Log Analysis", "IDS/IPS", "Threat Hunting"]}
                severity="medium"
              />
              <ProjectCard
                title="Security Automation Scripts"
                subtitle="Python & Bash Tools"
                desc="Custom security tools for vulnerability scanning, enumeration automation, and report generation. Focus on efficiency and reproducibility in security assessments."
                tags={["Python", "Bash", "Automation", "DevSecOps"]}
                severity="low"
              />
            </div>
          </section>

          <section id="labs" className="pt-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              <h2 className="text-3xl font-bold">Labs & Write-ups</h2>
            </div>

            <p className="mt-2 text-white/70 max-w-3xl text-lg mb-8">
              Detailed technical documentation of security assessments: methodologies, findings,
              exploitation techniques, and defensive countermeasures for real-world scenarios.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <LabCard
                title="Apache Server Hardening"
                desc="Complete security audit of Apache web server. Identifying and fixing information disclosure vulnerabilities, implementing security headers, and validating configurations."
                tags={["Linux", "Apache", "Hardening", "InfoSec"]}
                date="2024"
              />
              <LabCard
                title="Secure DNS & Deployment"
                desc="End-to-end secure deployment pipeline using Cloudflare for DNS management and DDoS protection, with automated HTTPS provisioning and security best practices."
                tags={["Cloudflare", "DNS", "HTTPS", "DevSecOps"]}
                date="2024"
              />
              <LabCard
                title="SQL Injection Deep Dive"
                desc="Exploring various SQL injection techniques from basic union-based to blind and time-based attacks. Includes both exploitation and secure coding practices."
                tags={["SQLi", "Web Security", "Database", "OWASP"]}
                date="2024"
              />
              <LabCard
                title="Active Directory Attacks"
                desc="Understanding common AD attack vectors: Kerberoasting, Pass-the-Hash, Golden Tickets. Lab setup, exploitation, and detection mechanisms."
                tags={["AD", "Windows", "Post-Exploitation", "Red Team"]}
                date="2024"
              />
            </div>
          </section>

          <section id="skills" className="pt-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <h2 className="text-3xl font-bold">Technical Arsenal</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCategory
                title="Penetration Testing"
                skills={["Burp Suite", "Metasploit", "Nmap", "Nikto", "SQLMap", "Hydra"]}
              />
              <SkillCategory
                title="Operating Systems"
                skills={["Kali Linux", "Parrot OS", "Ubuntu Server", "Windows Server"]}
              />
              <SkillCategory
                title="Scripting & Automation"
                skills={["Python", "Bash", "PowerShell", "Git"]}
              />
              <SkillCategory
                title="Web Technologies"
                skills={["OWASP Top 10", "REST APIs", "Docker", "Nginx/Apache"]}
              />
              <SkillCategory
                title="Network Security"
                skills={["Wireshark", "VPN", "Firewalls", "IDS/IPS"]}
              />
              <SkillCategory
                title="Cloud & DevSecOps"
                skills={["Cloudflare", "Vercel", "CI/CD", "Infrastructure as Code"]}
              />
            </div>
          </section>

          <section id="contact" className="pt-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-cyan-500"></div>
              <h2 className="text-3xl font-bold">Get In Touch</h2>
            </div>

            <div className="rounded-2xl border-2 border-green-500/20 bg-gradient-to-br from-green-500/5 to-cyan-500/5 backdrop-blur p-8">
              <p className="text-lg text-white/80 mb-6">
                Interested in collaboration, security consulting, or just want to connect?
                Feel free to reach out through any of these platforms.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  className="flex items-center gap-2 rounded-xl border-2 border-white/20 bg-black/40 backdrop-blur px-6 py-3 hover:border-green-500 hover:bg-green-500/10 transition-all font-semibold"
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>GitHub</span>
                  <span>↗</span>
                </a>
                <a
                  className="flex items-center gap-2 rounded-xl border-2 border-white/20 bg-black/40 backdrop-blur px-6 py-3 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all font-semibold"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>LinkedIn</span>
                  <span>↗</span>
                </a>
              </div>

              <p className="mt-6 text-sm text-white/50 font-mono">
                Email coming soon with proper SPF/DKIM/DMARC configuration
              </p>
            </div>
          </section>

          <footer className="pt-16 text-center text-sm text-white/40 border-t border-white/10">
            <p className="font-mono">
              © {new Date().getFullYear()} Iván Lastra | Built with security in mind
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}

function StatCard({ number, label, icon }: { number: string; label: string; icon: string }) {
  return (
    <div className="rounded-xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-black/40 backdrop-blur p-6 hover:border-green-500 transition-all">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-3xl font-bold text-green-400">{number}</div>
      <div className="text-sm text-white/60">{label}</div>
    </div>
  );
}

function ProjectCard({
  title,
  subtitle,
  desc,
  tags,
  severity,
}: {
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  severity: "critical" | "high" | "medium" | "low";
}) {
  const severityColors = {
    critical: "border-red-500/30 hover:border-red-500 hover:shadow-red-500/20",
    high: "border-orange-500/30 hover:border-orange-500 hover:shadow-orange-500/20",
    medium: "border-yellow-500/30 hover:border-yellow-500 hover:shadow-yellow-500/20",
    low: "border-green-500/30 hover:border-green-500 hover:shadow-green-500/20",
  };

  const severityBadge = {
    critical: "bg-red-500/20 text-red-400 border-red-500/50",
    high: "bg-orange-500/20 text-orange-400 border-orange-500/50",
    medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
    low: "bg-green-500/20 text-green-400 border-green-500/50",
  };

  return (
    <div
      className={`rounded-2xl border-2 bg-black/40 backdrop-blur p-6 hover:shadow-xl transition-all duration-300 ${severityColors[severity]}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-green-400 font-mono">{subtitle}</p>
        </div>
        <span
          className={`text-xs uppercase font-bold px-2 py-1 rounded border ${severityBadge[severity]}`}
        >
          {severity}
        </span>
      </div>
      <p className="text-sm text-white/70 leading-relaxed mb-4">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-cyan-300 font-mono"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function LabCard({
  title,
  desc,
  tags,
  date,
}: {
  title: string;
  desc: string;
  tags: string[];
  date: string;
}) {
  return (
    <div className="rounded-2xl border-2 border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-black/40 backdrop-blur p-6 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <span className="text-xs text-white/40 font-mono">{date}</span>
      </div>
      <p className="text-sm text-white/70 leading-relaxed mb-4">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs rounded-full border border-white/20 bg-black/30 px-3 py-1 text-white/70 font-mono"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:bg-white/10 transition-all">
      <h3 className="text-lg font-bold text-green-400 mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-sm text-white/70 flex items-center gap-2">
            <span className="text-green-500">▸</span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
