/**
 * Security Sanitization & XSS Prevention Utilities
 */

/**
 * Escapes characters with special meaning in HTML to prevent XSS and HTML injection.
 */
export function escapeHtml(str: string): string {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Strips dangerous control characters, trims whitespace, and limits maximum length.
 */
export function sanitizeString(value: unknown, maxLength: number = 2000): string {
  if (value === null || value === undefined) return '';
  const str = String(value);
  // Remove null bytes and non-printable control characters except newline and tab
  const cleaned = str.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '').trim();
  return cleaned.slice(0, maxLength);
}

/**
 * Sanitizes and normalizes email addresses.
 */
export function sanitizeEmail(email: unknown): string {
  if (!email || typeof email !== 'string') return '';
  return sanitizeString(email, 254).toLowerCase().trim();
}

/**
 * Formats multi-line text safely for HTML emails by escaping HTML and converting newlines to <br/>.
 */
export function formatSafeMultilineHtml(text: string): string {
  const sanitized = sanitizeString(text, 5000);
  const escaped = escapeHtml(sanitized);
  return escaped.replace(/\r?\n/g, '<br/>');
}
