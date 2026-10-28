/**
 * Central place for all Horla Consult contact details.
 * Update these values in ONE place and every page stays in sync.
 */

// Primary WhatsApp number in international format WITHOUT the leading '+'
// or any spaces / dashes (required by the wa.me deep-link format).
export const WHATSAPP_NUMBER = '233248988503';

// A friendly pre-filled message opened in the user's WhatsApp chat.
export const WHATSAPP_MESSAGE =
  "Hello Horla Engineering & Design, I'd like to discuss a project.";

// Phone numbers for click-to-call (tel: links open the phone dialer / call log).
export const PHONE_PRIMARY = '+233248988503';
export const PHONE_SECONDARY = '+233201842968';

// Human-readable versions for display in the UI.
export const PHONE_PRIMARY_DISPLAY = '+233 (0)24 898 8503';
export const PHONE_SECONDARY_DISPLAY = '+233 (0)20 184 2968';

// Email.
export const EMAIL = 'louishorlali@gmail.com';

// Physical location.
export const LOCATION = 'Accra, Ghana';

/** Fully-formed https://wa.me deep link that opens the WhatsApp chat directly. */
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

/** tel: link that opens the native dialer / call log. */
export const TEL_LINK = `tel:${PHONE_PRIMARY}`;

/** mailto: link for the primary email address. */
export const MAILTO_LINK = `mailto:${EMAIL}`;
