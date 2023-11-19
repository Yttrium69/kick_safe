from flask import Flask, render_template, request

app = Flask(__name__)

@app.get('/')
def index():
    param = request.args.get('param')
    print(param)
    return "gogogogogogogo"

@app.post('/')
def index_post():
    param = request.args.get('param')
    print(param)
    return "gogogogogogogo"


if(__name__ == '__main__'):
    app.run(host='0.0.0.0')