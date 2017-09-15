var Doctors = require('../js/doctor.js').doctorModule;

$(function() {
  $('#symptom-form').submit(function(event) {
    event.preventDefault();
    let symptomSearch = $('#symptom').val();
    let symptom = symptomSearch.toLowerCase();
    $('#symptom').val("");
    let doctor = new Doctors();
    let doctors = doctor.symptom(symptom);
  });

  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    let nameSearch = $('#name').val();
    let stateSearch = $('#state').val();
    let citySearch = $('#city').val();
    let name = nameSearch.toLowerCase();
    let state = stateSearch.toLowerCase();
    let city = citySearch.toLowerCase();
    $('#name').val("");
    $('#state').val("");
    $('#city').val("");
    let doctor = new Doctors();
    let doctors = doctor.doctorName(name, state, city);
  });
  $('#clear-results').click(function() {
    $('#doctors-result').html("");
  });
});
