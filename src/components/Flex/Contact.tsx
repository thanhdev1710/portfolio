"use client";
import { useState } from "react";
import { Check, Copy, Phone, Mail, MapPin } from "lucide-react";
import { ShootingStars } from "../shared/shooting-stars";
import { StarsBackground } from "../shared/stars-background";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("youremail@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset trạng thái sau 2 giây
  };

  return (
    <article className="card-customer p-6">
      <div className="flex flex-col h-full w-full gap-6 relative z-10">
        <h3 className="text-lg tracking-widest font-light text-[var(--text-secondary)] uppercase">
          Contact
        </h3>
        <h4 className="text-xl font-medium tracking-wide">
          Let&apos;s connect! Feel free to reach out through the following:
        </h4>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-[var(--text-secondary)]" />
            <span className="text-[var(--text-secondary)]">
              chithanh171004@gmail.com
            </span>
          </div>
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 justify-center w-full py-2 px-4 border-2 border-[var(--border)] rounded-full hover:bg-[var(--hover-bg)] transition-all"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-green-500">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5 text-[var(--text-secondary)]" />
                <span className="text-[var(--text-secondary)]">Copy Email</span>
              </>
            )}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-[var(--text-secondary)]" />
          <span className="text-[var(--text-secondary)]">+84 123 456 789</span>
        </div>

        <div className="flex flex-col gap-2 ">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[var(--text-secondary)]" />
            <h4 className="text-lg tracking-wide font-medium text-[var(--text-secondary)]">
              Address
            </h4>
          </div>
          <p className="text-[var(--text-secondary)]">
            Ho Chi Minh City, Vietnam — a city full of energy and opportunity.
          </p>
        </div>
      </div>
      <ShootingStars />
      <StarsBackground />
    </article>
  );
}
