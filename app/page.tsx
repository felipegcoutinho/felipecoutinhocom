import Image from "next/image";
import Link from "next/link";

const LINKEDIN_URL =
  process.env.NEXT_PUBLIC_LINKEDIN_URL ||
  "https://www.linkedin.com/in/felipegcoutinho";
const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "eu@felipecoutinho.com";
const GITHUB_URL =
  process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/felipegcoutinho";

const SKILLS = {
  Network: ["Wi-Fi / WLAN", "LAN & Routing", "VLANs", "Access Points", "TCP/IP", "DNS / DHCP", "Firewall", "VPN", "Cisco IOS", "Ubiquiti / UniFi", "TP-Link Omada"],
  Virtualization: ["Proxmox", "Windows Server", "Hyper-V / VMware", "Docker", "Linux", "Active Directory", "PowerShell", "Asset Management"],
  Dev: ["React / Next.js", "TypeScript", "Git", "AI-assisted workflows"],
};

const PROJECTS = [
  {
    name: "OpenMonetis",
    description: "Personal finance app — Next.js, PostgreSQL, Docker.",
    url: "https://github.com/felipegcoutinho/openmonetis",
  },
  {
    name: "felipecoutinho.com",
    description: "This portfolio — Next.js, Tailwind CSS, Vercel.",
    url: GITHUB_URL,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex items-center py-10">
      <div className="mx-auto max-w-2xl w-full px-6 space-y-8">

        {/* Header — foto + nome + badge */}
        <header className="flex items-center gap-5">
          <Image
            src="/avatar.png"
            alt="Foto de perfil de Felipe Coutinho"
            width={72}
            height={72}
            priority
            className="rounded-full shrink-0"
          />
          <div className="space-y-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
                Felipe Coutinho
              </h1>
            </div>
            <p className="font-semibold text-foreground/60">
              IT Infrastructure &amp; Networking Specialist (LAN &amp; WLAN)
            </p>
          </div>
        </header>

        <hr className="border-foreground/10" />

        {/* Bio */}
        <section className="space-y-6 leading-relaxed text-pretty">
          <p>
            IT professional with solid experience in technical support and
            network infrastructure, focused on Wi-Fi environments, LAN/WLAN
            troubleshooting, access points deployment, and corporate
            connectivity.
          </p>
          <p>
            Skilled in asset management, system support, and day-to-day IT
            operations, with growing expertise in VLANs, routing, and
            virtualization — Proxmox, Windows Server, and VMware. I also
            explore web development and integrating AI tools into daily
            workflows.
          </p>
          <p>
            Currently advancing towards network engineering roles, with
            emphasis on wireless networks, performance optimization, and
            scalable connectivity solutions.
          </p>
        </section>

        {/* Skills agrupadas */}
        <section className="space-y-3">
          <p className="text-sm font-semibold tracking-wide uppercase opacity-50">
            Skills
          </p>
          <div className="space-y-4">
            {Object.entries(SKILLS).map(([group, items]) => (
              <div key={group} className="space-y-1.5">
                <span className="text-xs text-foreground/40">{group}</span>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-full border border-foreground/15 text-foreground/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects com ↗ */}
        <section className="space-y-3">
          <p className="text-sm font-semibold tracking-wide uppercase opacity-50">
            Projects
          </p>
          <ul className="space-y-3">
            {PROJECTS.map((project) => (
              <li key={project.name}>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col"
                >
                  <span className="font-medium text-amber-500 group-hover:underline underline-offset-4">
                    {project.name}
                    <span className="inline-block ml-1 opacity-50 group-hover:opacity-100 transition-opacity">
                      ↗
                    </span>
                  </span>
                  <span className="text-sm opacity-60">{project.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </Link>
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub
          </Link>
          <Link
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            {CONTACT_EMAIL}
          </Link>
        </footer>

      </div>
    </main>
  );
}
