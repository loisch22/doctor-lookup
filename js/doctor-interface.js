var Doctors = require('../js/doctor.js').doctorModule;

$(function() {
  $('#symptom-form').submit(function(event) {
    event.preventDefault();
    let symptomSearch = $('#symptom').val();
    let symptom = symptomSearch.toLowerCase();
    console.log(symptom);
    $('#symptom').val("");
    let doctor = new Doctors();
    let doctorArr = doctor.symptom(symptom);


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
