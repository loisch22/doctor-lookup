(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "55d30b31fbdf0081b273945f7ddd0076";

},{}],2:[function(require,module,exports){
'use strict';

var apiKey = require('./../.env').apiKey;

var Doctors = function Doctors() {};

Doctors.prototype.symptom = function (symptom) {
  var promiseSymptom = new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    var url = 'https://api.betterdoctor.com/2016-03-01/doctors?query=' + symptom + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey;
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(Error(xhr.statusText));
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  });
  promiseSymptom.then(function (response) {
    var body = JSON.parse(response);
    $('#doctors-result table').empty();
    for (var i = 0; i < body.data.length; i++) {
      $("#doctors-result table").append("<tr>");
      $("#doctors-result table").append("<td>");
      $("#doctors-result table").append(body.data[i].profile.first_name + " " + body.data[i].profile.last_name);
      $("#doctors-result table").append("</td>");
      $("#doctors-result table").append("</tr>");
    }
  }, function (error) {
    $('#doctors-result').text("There was an error while processing your request. Please try again.");
  });
};

// https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=${state}-${city}&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=55d30b31fbdf0081b273945f7ddd0076

Doctors.prototype.doctorName = function (name, state, city) {
  var promiseDoctor = new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    var url = 'https://api.betterdoctor.com/2016-03-01/doctors?name=' + name + '&location=' + state + '-' + city + '&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey;
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(Error(xhr.statusText));
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  });
  promiseDoctor.then(function (response) {
    var body = JSON.parse(response);
    $('#doctors-result table').empty();
    for (var i = 0; i < body.data.length; i++) {
      $("#doctors-result table").append("<tr>");
      $("#doctors-result table").append("<td>");
      $("#doctors-result table").append(body.data[i].profile.first_name + " " + body.data[i].profile.last_name);
      // $("#doctors-result table").append("<br>" + "<p>Website: </p>" + body.data[i].website + "<br>" + "<p>Accepts new patients: " + body.data[i].practices.accepts_new_patients + "<br>");
      $("#doctors-result table").append("</td>");
      $("#doctors-result table").append("</tr>");
      console.log(body.data[i].accepts_new_patients);
    }
  }, function (error) {
    $('#errors').text("There was an error while processing your request. Please try again.");
  });
};

exports.doctorModule = Doctors;

},{"./../.env":1}],3:[function(require,module,exports){
'use strict';

var Doctors = require('../js/doctor.js').doctorModule;

$(function () {
  $('#symptom-form').submit(function (event) {
    event.preventDefault();
    var symptomSearch = $('#symptom').val();
    var symptom = symptomSearch.toLowerCase();
    $('#symptom').val("");
    var doctor = new Doctors();
    var doctors = doctor.symptom(symptom);
  });

  $('#doctor-form').submit(function (event) {
    event.preventDefault();
    var nameSearch = $('#name').val();
    var stateSearch = $('#state').val();
    var citySearch = $('#city').val();
    var name = nameSearch.toLowerCase();
    var state = stateSearch.toLowerCase();
    var city = citySearch.toLowerCase();
    $('#name').val("");
    $('#state').val("");
    $('#city').val("");
    var doctor = new Doctors();
    var doctors = doctor.doctorName(name, state, city);
  });
  $('#clear-results').click(function () {
    $('#doctors-result').html("");
  });
});

},{"../js/doctor.js":2}]},{},[3]);
