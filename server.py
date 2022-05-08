import datetime
from collections import defaultdict
from glob import glob
from urllib import response
from flask import Flask, make_response
from flask import render_template
from flask import Response, request, jsonify
import data
app = Flask(__name__)

homepage_data = data.get_homepage_data()
bubble_data = data.get_bubble_data()
insertion_data = data.get_insertion_data()
quiz_data = data.get_quiz_data()
times_data = []
user_answers = {}
current_id = 0

header_age = 'public, max-age=0'


@app.route('/')
def homepage():
    global homepage_data

    response = make_response(render_template(
        'homepage.html', homepage_data=homepage_data))
    response.headers['Cache-Control'] = header_age
    return response


@app.route('/learn/<id>')
def learn(id=None):
    global bubble_data
    global insertion_data
    global user_time

    times_data.append({
        'id': id,
        'time': datetime.datetime.now()
    })
    print(times_data[-1])
    # user_time = times_data[-1].time - times_data[0].time
    response = make_response(render_template(
        'learn.html', bubble_data=bubble_data, insertion_data=insertion_data, id=id))
    response.headers['Cache-Control'] = header_age
    return response


@app.route('/quiz/<id>')
def quiz(id=None):
    global quiz_data
    global user_answers
    global current_id

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
            'quiz_end.html', quiz_data=quiz_data, id=id, user_answers=user_answers))
        print(user_answers)
        user_answers = {}
        current_id = 0
    response.headers['Cache-Control'] = header_age
    return response


# AJAX FUNCTIONS

@app.route('/quiz/save_answer', methods=['GET', 'POST'])
def save_answer():
    global user_answers
    global current_id
    global quiz_data

    answer = request.get_json()
    # add new entry to array with
    # a new id and the name the user sent in JSON
    current_id += 1
    user_answers[str(current_id)] = answer['answer']
    print(quiz_data[str(current_id)]['answer'])
    print("user_answer", answer['answer'])
    if answer['answer'] == quiz_data[str(current_id)]['answer']:
        return jsonify("correct!")
    else:
        return jsonify("wrong!")
    # send back id of new watch
    # return jsonify(user_answers=user_answers)


if __name__ == '__main__':
    app.run(debug=True)
