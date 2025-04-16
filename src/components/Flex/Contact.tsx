"use client";
import { useState } from "react";
import { Check, Copy, Phone, Mail, MapPin } from "lucide-react";
import { ShootingStars } from "../shared/shooting-stars";
import { StarsBackground } from "../shared/stars-background";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("chithanh171004@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="card-customer p-6">
      <div className="flex flex-col h-full w-full gap-6 relative z-10">
        <h3 className="text-lg tracking-widest font-light text-[var(--text-secondary)] uppercase">
          Liên hệ
        </h3>
        <h4 className="text-xl font-medium tracking-wide">
          Kết nối với mình nhé! Bạn có thể liên lạc qua các cách sau:
        </h4>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-[var(--text-secondary)]" />
            <span className="text-[var(--text-secondary)]">
              chithanh171004@gmail.com
            </span>
          </div>
          <button
            aria-label="Sao chép email"
            onClick={handleCopyEmail}
            className="flex items-center gap-2 justify-center w-full py-2 px-4 border-2 border-[var(--border)] rounded-full hover:bg-[var(--hover-bg)] transition-all"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-green-500">Đã sao chép email!</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5 text-[var(--text-secondary)]" />
                <span className="text-[var(--text-secondary)]">
                  Sao chép email
                </span>
              </>
            )}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-[var(--text-secondary)]" />
          <span className="text-[var(--text-secondary)]">+84 705 948 932</span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[var(--text-secondary)]" />
            <h4 className="text-lg tracking-wide font-medium text-[var(--text-secondary)]">
              Địa chỉ
            </h4>
          </div>
          <p className="text-[var(--text-secondary)]">
            TP. Hồ Chí Minh, Việt Nam
          </p>
        </div>
      </div>
      <ShootingStars />
      <StarsBackground />
    </article>
  );
}
