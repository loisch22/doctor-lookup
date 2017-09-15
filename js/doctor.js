var apiKey = require('./../.env').apiKey;

let Doctors = function() {

};

Doctors.prototype.symptom = function(symptom) {
  let promiseSymptom = new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`;
    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(Error(xhr.statusText));
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  });
  promiseSymptom.then(function(response) {
    let body = JSON.parse(response);
    $('#doctors-result table').empty();
    for(let i = 0; i < body.data.length; i++) {
      $("#doctors-result table").append("<tr>");
      $("#doctors-result table").append("<td>");
      $("#doctors-result table").append(body.data[i].profile.first_name + " " + body.data[i].profile.last_name);
      $("#doctors-result table").append("</td>");
      $("#doctors-result table").append("</tr>");
    }
    }, function(error) {
      $('#doctors-result').text("There was an error while processing your request. Please try again.");
  });
};

// https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=${state}-${city}&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=55d30b31fbdf0081b273945f7ddd0076

Doctors.prototype.doctorName = function(name, state, city) {
  let promiseDoctor = new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=${state}-${city}&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`;
    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(Error(xhr.statusText));
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  });
  promiseDoctor.then(function(response) {
    let body = JSON.parse(response);
    $('#doctors-result table').empty();
    if (body.data.length > 0) {
      for(var i=0; i < body.data.length; i++) {
        $("#doctors-result table").append("<tr>");
        $("#doctors-result table").append("<td>");
        $("#doctors-result table").append(body.data[i].profile.first_name + " " + body.data[i].profile.last_name + " " + body.data[i].profile.title);
        // $("#doctors-result table").append("<br>" + "<p>Website: </p>" + body.data[i].website + "<br>" + "<p>Accepts new patients: " + body.data[i].practices.accepts_new_patients + "<br>");
        $("#doctors-result table").append("</td>");
        $("#doctors-result table").append("</tr>");
        console.log(body.data[i].accepts_new_patients);
      }
    } else if (body.data.length === 0 || undefined) {
        $('#doctors-result table').append("Sorry, there were no doctors that matched your criteria.");
      }
    }, function(error) {
      $('#errors').text("There was an error while processing your request. Please try again.");
  });
};

exports.doctorModule = Doctors;
