from flask import Flask, jsonify
from flask_cors import CORS
from datetime import datetime
import os

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({
        "message": "Welcome to Flask Backend",
        "status": "Running"
    })

@app.route("/api/health")
def health():
    return jsonify({
        "status": "Healthy",
        "service": "Flask Backend",
        "time": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    })

@app.route("/api/info")
def info():
    return jsonify({
        "application": "AWS Flask Backend",
        "version": "1.0.0",
        "environment": os.getenv("APP_ENV", "development"),
        "server_time": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "hostname": os.getenv("HOSTNAME", "localhost")
    })

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )
