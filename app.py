from flask import Flask
from datetime import datetime
import whois

app = Flask(__name__)

@app.route("/", methods=['GET'])
def root():
    res = {
        'time': datetime.now(),
        'des': 'this is home page'
               'help' 'try: https://dns-insight-service.onrender.com/url/www.example.com'
    }
    return res


@app.route("/url/<item_url>", methods=['GET'])
def get_url(item_url):
    if item_url == None:
        item_url = "www.baidu.com"
    res = {
        "time": datetime.now(),
        "url": item_url,
        "whois": whois.whois(item_url)
    }
    return res
