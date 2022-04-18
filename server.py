from collections import defaultdict
from glob import glob
from urllib import response
from flask import Flask, make_response
from flask import render_template
from flask import Response, request, jsonify
import data
app = Flask(__name__)
import datetime

homepage_data = data.get_homepage_data()
bubble_data = data.get_bubble_data()
insertion_data = data.get_insertion_data()
quiz_data = data.get_quiz_data()
times_data = []

header_age = 'public, max-age=0'


@app.route('/')
def homepage():
    response = make_response(render_template(
        'homepage.html', homepage_data=homepage_data))
    response.headers['Cache-Control'] = header_age
    return response


@app.route('/learn/<id>')
def learn(id=None):
    times_data.append({
        'id': id,
        'time': datetime.datetime.now()
    });
    print(times_data[-1]);
    response = make_response(render_template(
        'learn.html', bubble_data=bubble_data, insertion_data=insertion_data, id=id))
    response.headers['Cache-Control'] = header_age
    return response


@app.route('/quiz/<id>')
def quiz(id=None):
    if int(id) in range(0, 5):
        quiz = quiz_data[id]
        response = make_response(render_template(
            'draggable_quiz.html', quiz_data=quiz, id=id))
    elif int(id) in range(5, 11):
        quiz = quiz_data[id]
        response = make_response(render_template(
            'quiz.html', quiz_data=quiz, id=id))
    else:
        response = make_response(render_template(
            'quiz_end.html', quiz_data=quiz_data, id=id))
    response.headers['Cache-Control'] = header_age
    return response


if __name__ == '__main__':
    app.run(debug=True)
