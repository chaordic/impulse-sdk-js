export function buildDeviceType(userAgent: string): string {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );
    const isTablet = /iPad/i.test(userAgent);
    const isDesktop = !isMobile && !isTablet;
  
    if (isMobile) {
      return 'mobile';
    }
  
    if (isTablet) {
      return 'tablet';
    }
  
    if (isDesktop) {
      return 'desktop';
    }
  
    return 'unknown';
  }