import { TextAnimate } from "../components/magicui/text-animate";
import { Linkedin, Mail } from "lucide-react";
import { VideoText } from "../components/magicui/video-text";
import { ActionButton } from "@/components/ui/action-button";

const LINKEDIN_URL =
  process.env.NEXT_PUBLIC_LINKEDIN_URL ||
  "https://www.linkedin.com/in/felipegcoutinho";
const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "eu@felipecoutinho.com";
const MAIL_SUBJECT = "Contato via site";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 sm:p-20 text-center">
      <div className="relative w-full overflow-hidden h-20 sm:h-28 md:h-36 lg:h-44 xl:h-52">
        <VideoText
          as="h1"
          src="orange_bg.mp4"
          fontWeight={800}
          fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
          fontSize={6}
        >
          Felipe Coutinho.
        </VideoText>
      </div>

      <TextAnimate
        as="p"
        className="text-center text-lg sm:text-xl leading-relaxed max-w-xl"
        animation="blurInUp"
        by="word"
        once
      >
        IT professional with experience in technical support and networking,
        transitioning to infrastructure. Skilled in asset management, network
        configuration, and systems administration, with growing expertise in
        Proxmox, Windows Server, Hyper-V/VMware virtualization, and LAN/WLAN
        design.
      </TextAnimate>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <ActionButton
          href={LINKEDIN_URL}
          external
          ariaLabel="Ir para LinkedIn"
          icon={<Linkedin size={18} />}
        >
          LinkedIn
        </ActionButton>

        <ActionButton
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
            MAIL_SUBJECT
          )}`}
          ariaLabel="Enviar e-mail"
          icon={<Mail size={18} />}
        >
          Enviar e-mail
        </ActionButton>
      </div>
    </div>
  );
}
