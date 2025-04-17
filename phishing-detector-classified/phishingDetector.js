export function detectPhishing({ body, subject, sender }) {
  const score = {
    phishing: 0,
    suspicious: 0
  };

  const phishingKeywords = [
    "verify your account", "login required", "click below",
    "your account is suspended", "password expired", "unusual activity"
  ];

  const dangerousExtensions = [".exe", ".scr", ".zip", ".js"];

  const urls = Array.from(body.matchAll(/https?:\/\/[^\"\s]+/g)).map(m => m[0]);

  phishingKeywords.forEach(kw => {
    if (body.toLowerCase().includes(kw)) score.phishing += 1;
  });

  urls.forEach(url => {
    if (!url.includes(senderDomain(sender))) score.suspicious += 1;
  });

  dangerousExtensions.forEach(ext => {
    if (body.toLowerCase().includes(ext)) score.phishing += 1;
  });

  if (score.phishing >= 2) return "Phishing";
  if (score.suspicious >= 2 || score.phishing === 1) return "Suspicious";
  return "Safe";
}

function senderDomain(email) {
  return email.split("@")[1] || "";
}