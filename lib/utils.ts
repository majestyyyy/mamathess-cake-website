import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Sanitizes generic user input by stripping control/non-printable characters,
 * trimming leading/trailing whitespace, and enforcing maximum length boundaries.
 */
export function sanitizeInput(input: unknown, maxLength = 300): string {
  if (typeof input !== 'string') return ''
  // Strip control characters (ASCII 0-31, 127) except standard whitespace
  const sanitized = input
    .replace(/[\u0000-\u0008\u000B-\u000C\u000E-\u001F\u007F-\u009F]/g, '')
    .trim()
  return sanitized.slice(0, maxLength)
}

/**
 * Validates and sanitizes telephone numbers.
 */
export function sanitizePhone(input: unknown): string {
  if (typeof input !== 'string') return ''
  // Allow only digits, +, -, spaces, and parentheses
  const cleaned = input.replace(/[^\d+\-()\s]/g, '').trim()
  return cleaned.slice(0, 30)
}

