exports.checkSenderReputation = (email) => {
    const domain = email.split('@')[1] || '';
    
    const badDomains = ['scam.com', 'phishmail.net'];
    const unknownDomains = ['mailservice.info', 'tempemail.org'];
  
    if (badDomains.includes(domain)) return 'bad';
    if (unknownDomains.includes(domain)) return 'unknown';
    return 'good';
  };
  