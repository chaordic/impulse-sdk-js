export const isBrowser = () =>
  typeof window !== 'undefined' &&
  window.document &&
  window.document.nodeType === 9