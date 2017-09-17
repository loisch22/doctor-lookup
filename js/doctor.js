var apiKey = require('./../.env').apiKey;


let Doctors = function() {

};

Doctors.prototype.symptom = function(symptom, state, city) {
  let promiseSymptom = new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=${state}-${city}&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`;
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
    if (body.data.length > 0) {
      for(let i = 0; i < body.data.length; i++) {
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

    }, function(error) {
      $('#doctors-result').text("There was an error while processing your request: ${error.message}. Please try again.");
  });
};

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

    }, function(error) {
      $('#errors').text("There was an error while processing your request: ${error.message}. Please try again.");
  });
};

exports.doctorModule = Doctors;
