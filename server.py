from collections import defaultdict
from glob import glob
from urllib import response
from flask import Flask, make_response
from flask import render_template
from flask import Response, request, jsonify
import data
app = Flask(__name__)

bubble_data = data.get_bubble_data()
insertion_data = data.get_insertion_data()
quiz_data = data.get_quiz_data()

header_age = 'public, max-age=0'

@app.route('/')
def homepage():
    response = make_response(render_template(
        'homepage.html'))
    response.headers['Cache-Control'] = header_age
    return response

@app.route('/learn/<id>')
def learn(id):
    response = make_response(render_template(
        'learn.html', bubble_data = bubble_data, insertion_data = insertion_data))
    response.headers['Cache-Control'] = header_age
    return response

@app.route('/quiz/<id>')
def quiz(id):
    response = make_response(render_template(
        'quiz.html', quiz_data = quiz_data))
    response.headers['Cache-Control'] = header_age
    return response


if __name__ == '__main__':
    app.run(debug=True)
