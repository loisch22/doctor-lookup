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
    $('#name').val("");
    let name = nameSearch.toLowerCase();
    console.log(name);
    let doctor = new Doctors();
    let doctors = doctor.doctorName(name);
  });
  $('#clear-results').click(function() {
    $('#doctors-result').html("");
  });
});
