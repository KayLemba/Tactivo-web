import React from 'react';

// TODO: replace with the real Tactivo WhatsApp business number (international format, no + or leading 0s)
const WHATSAPP_NUMBER = '260000000000';
const DEFAULT_MESSAGE = "Hi Tactivo Technologies, I'd like to find out more about your services.";

function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      className="whatsapp-fab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16.02 2.67c-7.35 0-13.32 5.97-13.32 13.32 0 2.35.62 4.65 1.79 6.67L2.67 29.33l6.83-1.79a13.24 13.24 0 0 0 6.52 1.72h.01c7.35 0 13.32-5.97 13.32-13.32S23.37 2.67 16.02 2.67Zm0 24.36h-.01a11.06 11.06 0 0 1-5.64-1.55l-.4-.24-4.05 1.06 1.08-3.95-.26-.41a11.04 11.04 0 0 1-1.7-5.9c0-6.1 4.97-11.07 11.08-11.07 2.96 0 5.74 1.15 7.83 3.25a11 11 0 0 1 3.24 7.83c0 6.1-4.97 11-11.17 11Zm6.08-8.28c-.33-.17-1.96-.97-2.27-1.08-.3-.11-.53-.17-.75.17-.22.33-.86 1.08-1.06 1.3-.2.22-.39.25-.72.08-.33-.17-1.4-.52-2.66-1.65-.98-.87-1.65-1.95-1.84-2.28-.19-.33-.02-.5.15-.67.15-.15.33-.39.5-.58.17-.2.22-.33.33-.55.11-.22.06-.42-.03-.58-.08-.17-.75-1.8-1.03-2.47-.27-.65-.55-.56-.75-.57h-.64c-.22 0-.58.08-.88.42-.3.33-1.15 1.12-1.15 2.74s1.18 3.18 1.34 3.4c.17.22 2.32 3.54 5.63 4.97.79.34 1.4.54 1.88.7.79.25 1.5.21 2.07.13.63-.1 1.96-.8 2.24-1.57.28-.77.28-1.43.2-1.57-.08-.14-.3-.22-.63-.39Z" />
      </svg>
    </a>
  );
}

export default WhatsAppButton;
