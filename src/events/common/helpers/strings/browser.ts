export function isBrowser(): boolean {
  const DOCUMENT_NODE = 9
  return typeof window !== 'undefined' &&  window.document &&  window.document.nodeType === DOCUMENT_NODE
}
