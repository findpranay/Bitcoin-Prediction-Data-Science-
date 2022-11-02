from flask import Flask,request,jsonify
import util
app=Flask(__name__)

@app.route('/hello')
def hello():
    return 'HII'

@app.route('/predict_bitcoin', methods=['POST'])
def predict_bitcoin():
    
    day = int(request.form['day'])
    month = int(request.form['month'])
    year = int(request.form['year'])

    response = jsonify({
        'estimated_price': util.get_estimated_price(day,month,year)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__=="__main__":
    print("started")
    print("Starting Python Flask Server For Home Price Prediction...")
    util.load_artifacts()
    app.run()