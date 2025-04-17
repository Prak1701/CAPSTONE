let lastCheck = 0;
let checkDelay = 2000; // 2 seconds
let badgeTimeout = null;

const phishingKeywords = [
  "verify your account", "login required", "click below",
  "your account is suspended", "password expired", "unusual activity",
  "confirm your identity", "unauthorized access", "secure your account"
];

const dangerousExtensions = [".exe", ".scr", ".zip", ".js", ".bat"];

const observer = new MutationObserver(() => {
  const now = Date.now();
  if (now - lastCheck < checkDelay) return;
  lastCheck = now;

  const emailData = getEmailData();
  if (emailData && emailData.body.length > 20) {
    const status = detectPhishing(emailData);
    showStatusBadge(status);
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: false,
  characterData: false
});

function getEmailData() {
  const gmailBody = document.querySelector("div.a3s");
  const outlookBody = document.querySelector("[data-message-id]");
  const body = gmailBody?.innerText || outlookBody?.innerText || "";

  const gmailSubject = document.querySelector("h2.hP")?.innerText;
  const outlookSubject = document.querySelector("div.readMsgHeaderSubject")?.innerText;
  const subject = gmailSubject || outlookSubject || "";

  const gmailSender = document.querySelector("span.gD")?.getAttribute("email");
  const outlookSender = document.querySelector("span._pe_l")?.textContent;
  const sender = gmailSender || outlookSender || "";

  return { body, subject, sender };
}

function detectPhishing({ body, subject, sender }) {
  let phishingScore = 0;
  let suspiciousScore = 0;

  phishingKeywords.forEach(keyword => {
    if (body.toLowerCase().includes(keyword)) phishingScore += 1;
  });

  dangerousExtensions.forEach(ext => {
    if (body.toLowerCase().includes(ext)) phishingScore += 1;
  });

  const urls = Array.from(body.matchAll(/https?:\/\/[^\"\s]+/g)).map(m => m[0]);
  const senderDomain = sender.split("@")[1] || "";

  urls.forEach(url => {
    if (!url.includes(senderDomain)) suspiciousScore += 1;
  });

  if (phishingScore >= 2) return "Danger";
  if (suspiciousScore >= 2 || phishingScore === 1) return "Suspicious";
  return "Safe";
}

function showStatusBadge(status) {
  let badge = document.getElementById("phishing-status-badge");
  if (!badge) {
    badge = document.createElement("div");
    badge.id = "phishing-status-badge";
    badge.className = "status-badge";
    document.body.appendChild(badge);
  }

  badge.textContent = status;
  badge.classList.remove("Safe", "Suspicious", "Danger");
  badge.classList.add(status);

  // Auto-hide badge after 5 seconds
  if (badgeTimeout) clearTimeout(badgeTimeout);
  badgeTimeout = setTimeout(() => {
    badge.remove();
  }, 5000);
}