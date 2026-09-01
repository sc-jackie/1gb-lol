"use client";

import { useState } from "react";

type CopyAddressProps = {
  address: string;
};

export function CopyAddress({ address }: CopyAddressProps) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button type="button" className="btn" onClick={onCopy}>
      {copied ? "Copied." : "Copy address"}
    </button>
  );
}
