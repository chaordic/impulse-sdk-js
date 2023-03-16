export function isBrowser(): boolean {  
  return typeof window !== 'undefined' &&  window.document &&  window.document.nodeType === 9
}