export function isBrowser(): boolean {
  const DOCUMENT_NODE = 9
  return typeof window !== 'undefined' &&  window.document &&  window.document.nodeType === DOCUMENT_NODE
}

export function setBrowserId(): string {
    const BROWSER_ID_VERSION = '0-';
    const DIGITS = '-_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const ARRAY_SIZE = 36
    const HEXADECIMAL_0X3 = 0x3
    const HEXADECIMAL_0X9 = 0x9
    const END_RANDOMNESS = 7919
    const POSITION = 19
    
    const ALPHANUMERIC:any[] = [...Array(ARRAY_SIZE)].map(() => {
        const DIGITS_POSITION = Math.floor(Math.random() * DIGITS.length - 1)
        return DIGITS.substring(DIGITS_POSITION, DIGITS_POSITION + 1);
    })

    const DIGITS_POSITION = ALPHANUMERIC[POSITION] & HEXADECIMAL_0X3 | HEXADECIMAL_0X9
    ALPHANUMERIC[POSITION] = DIGITS.substring(DIGITS_POSITION, DIGITS_POSITION + 1);

    ALPHANUMERIC.push(String(Date.now()));
    ALPHANUMERIC.push(String(Math.floor((Math.random() * END_RANDOMNESS) + 1)));
    
    const BROWSER_ID = ALPHANUMERIC.join('');

    return BROWSER_ID_VERSION + BROWSER_ID;
}
