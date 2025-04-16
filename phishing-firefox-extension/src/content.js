function analyzeText(text) {
    const lower = text.toLowerCase();
    if (lower.includes("login") && lower.includes("click here")) return "Dangerous";
    if (lower.includes("urgent") || lower.includes("verify")) return "Suspicious";
    return "Safe";
  }
  
  function addWarningBanner(result) {
    const banner = document.createElement("div");
    banner.style.padding = "10px";
    banner.style.fontWeight = "bold";
    banner.style.textAlign = "center";
    banner.style.fontSize = "14px";
    banner.style.backgroundColor =
      result === "Dangerous" ? "#f44336" :
      result === "Suspicious" ? "#ff9800" : "#4caf50";
    banner.style.color = "#fff";
    banner.innerText = `⚠️ This email appears to be: ${result}`;
  
    const container = document.querySelector("div[role='main']");
    if (container && !document.getElementById("phishing-banner")) {
      banner.id = "phishing-banner";
      container.prepend(banner);
    }
  }
  
  function scanEmail() {
    const emailBody = document.querySelector("div[role='listitem'] div[dir='ltr']");
    if (emailBody) {
      const text = emailBody.innerText || "";
      const result = analyzeText(text);
      addWarningBanner(result);
    }
  }
  
  // Delay to ensure Gmail finishes loading
  setTimeout(scanEmail, 4000);
  