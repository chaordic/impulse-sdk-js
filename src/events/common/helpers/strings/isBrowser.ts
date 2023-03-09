export const isBrowser = (): boolean =>
  typeof window !== 'undefined' &&
  window.document &&
  window.document.nodeType === 9