var Doctors = require('../js/doctor.js').doctorModule;

$(function() {
  $('#symptom-form').submit(function(event) {
    event.preventDefault();
    let symptomSearch = $('#symptom').val();
    let stateSearch = $('#stateSymp').val();
    let citySearch = $('#citySymp').val();
    let symptom = symptomSearch.toLowerCase();
    let state = stateSearch.toLowerCase();
    let city = citySearch.toLowerCase();
    $('#symptom').val("");
    $('#stateSymp').val("");
    $('#citySymp').val("");
    let doctor = new Doctors();
    let doctors = doctor.symptom(symptom, state, city);
  });

  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    let nameSearch = $('#name').val();
    let stateSearch = $('#stateDoc').val();
    let citySearch = $('#cityDoc').val();
    let name = nameSearch.toLowerCase();
    let state = stateSearch.toLowerCase();
    let city = citySearch.toLowerCase();
    $('#name').val("");
    $('#stateDoc').val("");
    $('#cityDoc').val("");
    let doctor = new Doctors();
    let doctors = doctor.doctorName(name, state, city);
  });
  $('#clear-results').click(function() {
    $('#doctors-result').html("");
  });
});
