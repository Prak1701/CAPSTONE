exports.classifyContent = (text) => {
    const t = text.toLowerCase();
  
    if (
      t.includes('click here to update your account') ||
      t.includes('your account has been suspended') ||
      t.includes('we have access to your webcam') ||
      t.includes('we will expose') ||
      t.includes('cooperate or else') ||
      t.includes('you have 24 hours') ||
      t.includes('your private data') ||
      t.includes('pay us or else')
    ) {
      return 'dangerous';
    }
  
    if (
      t.includes('important notice') ||
      t.includes('validate information') ||
      t.includes('camera feed') ||
      t.includes('we are watching')
    ) {
      return 'suspicious';
    }
  
    return 'safe';
  };
  