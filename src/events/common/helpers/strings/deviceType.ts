export function getDeviceType(userAgent: string): string {
  const defaultDevice = 'desktop';
  const deviceTypes = {
    mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,
    tablet: /iPad/i,
  }

  return Object.entries(deviceTypes).reduce((deviceType, entry) => {
    const device = entry[0]
    const condition = entry[1]

    if (condition.test(userAgent)) {
      deviceType = device
    }
    
    return deviceType
  }, defaultDevice)
}
