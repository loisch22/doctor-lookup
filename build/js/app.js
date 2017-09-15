(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Doctors = function Doctors() {};

Doctors.prototype.symptom = function (symptom) {
  var promiseSymptom = new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    var url = "https://api.betterdoctor.com/2016-03-01/doctors?query=" + symptom + "&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=55d30b31fbdf0081b273945f7ddd0076";
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
    console.log(body.data.length);
    for (var i = 0; i < body.data.length; i++) {
      console.log("for loop");
      $("#doctors-result table").append("<tr>");
      $("#doctors-result table").append("<td>");
      $("#doctors-result table").append(body.data[i].profile.first_name + " " + body.data[i].profile.last_name);
      $("#doctors-result table").append("</td>");
      $("#doctors-result table").append("</tr>");
    }
  }, function (error) {
    $('#doctors-result').text("There was an error while processing your request: ${error.message}. Please try again.");
  });
};

exports.doctorModule = Doctors;

},{}],2:[function(require,module,exports){
'use strict';

var Doctors = require('../js/doctor.js').doctorModule;

$(function () {
  $('#symptom-form').submit(function (event) {
    event.preventDefault();
    var symptomSearch = $('#symptom').val();
    var symptom = symptomSearch.toLowerCase();
    console.log(symptom);
    $('#symptom').val("");
    var doctor = new Doctors();
    var doctorArr = doctor.symptom(symptom);

    // $('#doctor-form').submit(function(event) {
    //   event.preventDefault();
    //   let nameSearch = $('#name').val();
    //   let name = nameSearch.toLowerCase();
    //   console.log(name);
    //   $('#symptom').val("");
    //   // let doctor = new Doctor();
    //   // let doctorArr = doctor.symptom(symptomLower);
    //   // console.log(doctorArr);
    //
    //   let promiseDoctor = new Promise(function(resolve, reject) {
    //     let xhr = new XMLHttpRequest();
    //     let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=55d30b31fbdf0081b273945f7ddd0076`;
    //     xhr.onload = function() {
    //       if (xhr.status === 200) {
    //         resolve(xhr.response);
    //       } else {
    //         reject(Error(xhr.statusText));
    //       }
    //     };
    //     xhr.open("GET", url, true);
    //     xhr.send();
    //   });
    //   promiseDoctor.then(function(response) {
    //     let body = JSON.parse(response);  //
    //     for(var i=0; i < body.data.length; i++) {
    //       console.log("for loop");
    //       $("#doctors-result table").append("<tr>");
    //       $("#dotors-result table").append("<td>");
    //       $("#dotors-result table").append(body[i].data.profile.first_name);
    //       $("#dotors-result table").append("</tr>");
    //     }
    //     }, function(error) {
    //       $('#doctors-result').text("There was an error while processing your request: ${error.message}. Please try again.");
    //   });
  });
});

},{"../js/doctor.js":1}]},{},[2]);
