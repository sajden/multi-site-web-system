"use client"

/**
 * GDPR-compliant consent management utilities
 */

export type ConsentValue = "accepted" | "denied" | null

const CONSENT_KEY = "cookie_consent"

export function getConsent(): ConsentValue {
  if (typeof window === "undefined") return null

  const value = localStorage.getItem(CONSENT_KEY)
  if (value === "accepted" || value === "denied") {
    return value
  }
  return null
}

export function setConsent(value: ConsentValue) {
  if (typeof window === "undefined") return

  if (value === null) {
    localStorage.removeItem(CONSENT_KEY)
  } else {
    localStorage.setItem(CONSENT_KEY, value)
  }
}

export function hasConsent(): boolean {
  return getConsent() !== null
}

export function isConsentAccepted(): boolean {
  return getConsent() === "accepted"
}
