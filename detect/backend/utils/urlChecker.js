exports.checkUrls = async (urls) => {
    const unsafeUrls = [];
    const suspiciousUrls = [];
  
    for (let url of urls) {
      if (url.includes('bit.ly') || url.includes('suspicious.com')) {
        unsafeUrls.push(url);
      } else if (url.includes('tinyurl') || url.includes('redirect')) {
        suspiciousUrls.push(url);
      }
    }
  
    return { unsafeUrls, suspiciousUrls };
  };
  