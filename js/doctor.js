let Doctors = function() {

}

Doctors.prototype.symptom = function(symptom) {
  let promiseSymptom = new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=55d30b31fbdf0081b273945f7ddd0076`;
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
    console.log(body.data.length);
    for(let i = 0; i < body.data.length; i++) {
      console.log("for loop");
      $("#doctors-result table").append("<tr>");
          $("#doctors-result table").append("<td>");
          $("#doctors-result table").append(body.data[i].profile.first_name + " " + body.data[i].profile.last_name);
          $("#doctors-result table").append("</td>");
          $("#doctors-result table").append("</tr>");
    }
    }, function(error) {
      $('#doctors-result').text("There was an error while processing your request: ${error.message}. Please try again.");
  });


}

exports.doctorModule = Doctors;
