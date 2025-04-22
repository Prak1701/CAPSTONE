from flask import Flask, request, jsonify
from flask_cors import CORS
import re

app = Flask(__name__)
CORS(app)

# Regex-enhanced phishing traits
danger_phrases = [
    r'outstanding payment',
    r'legal action',
    r'blacklisting',
    r'verify.*account',
    r'bank.*account',
    r'aadhar|pan',
    r'pay.*immediately',
    r'click.*(here|link)',
    r'final reminder',
    r'confirm.*transaction',
    r'failure to respond.*(result|lead)',
    r'debit card',
    r'registered mobile',
    r'provide.*details',
    r'transaction.*hold',
    r'urgent',
    r'within.*(hour|hours)',
    r'we have your.*data',
    r'security team',
]

suspicious_phrases = [
    r'account.*update',
    r'limited time',
    r'security alert',
    r'validate.*account',
    r'respond quickly',
    r'unauthorized login',
    r'identity confirmation',
]

def detect_phishing(text):
    text = text.lower()
    danger_hits = sum(1 for p in danger_phrases if re.search(p, text))
    suspicious_hits = sum(1 for p in suspicious_phrases if re.search(p, text))

    if danger_hits >= 2:
        return "dangerous"
    elif danger_hits == 1 or suspicious_hits >= 1:
        return "suspicious"
    else:
        return "safe"

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    text = data.get("text", "")
    result = detect_phishing(text)
    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(port=5001)
