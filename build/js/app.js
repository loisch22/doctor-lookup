(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "55d30b31fbdf0081b273945f7ddd0076";

},{}],2:[function(require,module,exports){
'use strict';

var apiKey = require('./../.env').apiKey;

var Doctors = function Doctors() {};

Doctors.prototype.symptom = function (symptom, state, city) {
  var promiseSymptom = new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    var url = 'https://api.betterdoctor.com/2016-03-01/doctors?query=' + symptom + '&location=' + state + '-' + city + '&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey;
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
    if (body.data.length > 0) {
      for (var i = 0; i < body.data.length; i++) {
        $("#doctors-result table").append("<tr>");
        $("#doctors-result table").append("<td>");
        $("#doctors-result table").append("<strong>" + body.data[i].profile.first_name + " " + body.data[i].profile.last_name + " " + body.data[i].profile.title + "</strong>" + "<br>");
        $("#doctors-result table").append("<strong>" + "Address: " + "</strong>" + body.data[i].practices[0].visit_address.street + "<br>" + body.data[i].practices[0].visit_address.city + ", " + body.data[i].practices[0].visit_address.state + "<br>");
        $("#doctors-result table").append("<strong>" + "Phone: " + "</strong>" + body.data[i].practices[0].phones[0].number + "<br>");
        $("#doctors-result table").append("<strong>" + "Website: " + "</strong>" + body.data[i].practices[0].website + "<br>");
        $("#doctors-result table").append("<strong>" + "Accepts new patients: " + "</strong>" + body.data[i].practices[0].accepts_new_patients + "<br>" + "<hr>");
        $("#doctors-result table").append("</td>");
        $("#doctors-result table").append("</tr>");
      }
    } else if (body.data.length === 0 || undefined || null && body.data.practices[0].length === 0 || undefined || null) {
      $('#doctors-result table').append("Sorry, there were no doctors that matched your search criteria.");
    }
  }, function (error) {
    $('#doctors-result').text("There was an error while processing your request: ${error.message}. Please try again.");
  });
};

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
    if (body.data.length > 0) {
      for (var i = 0; i < body.data.length; i++) {
        $("#doctors-result table").append("<tr>");
        $("#doctors-result table").append("<td>");
        $("#doctors-result table").append("<strong>" + body.data[i].profile.first_name + " " + body.data[i].profile.last_name + " " + body.data[i].profile.title + "</strong>" + "<br>");
        $("#doctors-result table").append("<strong>" + "Address: " + "</strong>" + body.data[i].practices[0].visit_address.street + "<br>" + body.data[i].practices[0].visit_address.city + ", " + body.data[i].practices[0].visit_address.state + "<br>");
        $("#doctors-result table").append("<strong>" + "Phone: " + "</strong>" + body.data[i].practices[0].phones[0].number + "<br>");
        $("#doctors-result table").append("<strong>" + "Website: " + "</strong>" + body.data[i].practices[0].website + "<br>");
        $("#doctors-result table").append("<strong>" + "Accepts new patients: " + "</strong>" + body.data[i].practices[0].accepts_new_patients + "<br>" + "<hr>");
        $("#doctors-result table").append("</td>");
        $("#doctors-result table").append("</tr>");
      }
    } else if (body.data.length === 0 || undefined || null && body.data.practices[0].length === 0 || undefined || null) {
      $('#doctors-result table').append("Sorry, there were no doctors that matched your search criteria.");
    }
  }, function (error) {
    $('#errors').text("There was an error while processing your request: ${error.message}. Please try again.");
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
    var stateSearch = $('#stateSymp').val();
    var citySearch = $('#citySymp').val();
    var symptom = symptomSearch.toLowerCase();
    var state = stateSearch.toLowerCase();
    var city = citySearch.toLowerCase();
    $('#symptom').val("");
    $('#stateSymp').val("");
    $('#citySymp').val("");
    var doctor = new Doctors();
    var doctors = doctor.symptom(symptom, state, city);

    $('.showClear').show();
    $('.result-info').show();
  });

  $('#doctor-form').submit(function (event) {
    event.preventDefault();
    var nameSearch = $('#name').val();
    var stateSearch = $('#stateDoc').val();
    var citySearch = $('#cityDoc').val();
    var name = nameSearch.toLowerCase();
    var state = stateSearch.toLowerCase();
    var city = citySearch.toLowerCase();
    $('#name').val("");
    $('#stateDoc').val("");
    $('#cityDoc').val("");
    var doctor = new Doctors();
    var doctors = doctor.doctorName(name, state, city);

    $('.showClear').show();
    $('.result-info').show();
  });
  $('#clear-results').click(function () {
    $('#doctors-result').html("");
    $('.showClear').hide();
    $('.result-info').hide();
  });
});

},{"../js/doctor.js":2}]},{},[3]);
