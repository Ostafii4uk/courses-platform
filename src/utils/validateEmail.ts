export type EmailValidation = { valid: true } | { valid: false; reason: string }

export function validateEmail(input: string): EmailValidation {
  const email = input.trim()

  // General length
  if (email.length === 0) return { valid: false, reason: 'Empty string' }
  if (email.length > 254)
    return { valid: false, reason: 'Email too long (>254)' }

  // Exactly one @
  const at = email.indexOf('@')
  if (at === -1 || at !== email.lastIndexOf('@')) {
    return { valid: false, reason: "Email must contain exactly one '@'" }
  }

  const local = email.slice(0, at)
  const domain = email.slice(at + 1)

  // Local-part
  if (local.length === 0) return { valid: false, reason: 'Local-part is empty' }
  if (local.length > 64)
    return { valid: false, reason: 'Local-part is too long (>64)' }
  if (local.startsWith('.') || local.endsWith('.')) {
    return { valid: false, reason: "Local-part cannot start or end with '.'" }
  }
  if (local.includes('..'))
    return {
      valid: false,
      reason: 'Local-part cannot contain consecutive dots',
    }

  // Allow common characters in local-part (letters, digits, _, +, -, .)
  const localRe = /^[A-Za-z0-9._+-]+$/
  if (!localRe.test(local)) {
    return { valid: false, reason: 'Local-part contains invalid characters' }
  }

  // Domain
  if (domain.length === 0) return { valid: false, reason: 'Domain is empty' }
  if (domain.endsWith('.'))
    return { valid: false, reason: "Domain cannot end with '.'" }

  const labels = domain.split('.')
  if (labels.length < 2) {
    return {
      valid: false,
      reason:
        'Domain must contain at least one subdomain and a TLD (e.g. example.com)',
    }
  }

  // Unicode-friendly label: letters/digits/hyphen, no hyphen at edges, 1–63 chars
  const labelRe = /^(?!-)[\p{L}\p{N}-]{1,63}(?<!-)$/u

  for (const label of labels) {
    if (label.length === 0)
      return { valid: false, reason: "Domain label is empty (double dot '..')" }
    if (!labelRe.test(label)) {
      return { valid: false, reason: `Invalid domain label: "${label}"` }
    }
  }

  // TLD check (last label must be at least 2 chars)
  const tld = labels[labels.length - 1]
  if (tld.length < 2)
    return { valid: false, reason: 'Top-level domain is too short' }

  return { valid: true }
}

// Shortcut for boolean check
export const isEmail = (s: string) => validateEmail(s).valid
