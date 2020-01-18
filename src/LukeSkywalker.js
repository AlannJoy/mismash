// fetch example - works in the browser but not in node
// (fetch is not a part of node.js by default)

function getPerson() {
  fetch("https://swapi.co/api/people/2/") // make the request
    .then(response => response.json()) // convert response to json
    .then(myJson => {
      // display data in the browser
      document.body.innerHTML =
        "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>";
      const asd = document.createElement("button");
      asd.innerHTML = "DARTH VADER";
      document.body.appendChild(asd);
      asd.setAttribute("id", "newPerson");
    });
}

const person = document.getElementById("person");
person.onclick = function() {
  getPerson();
};

const newPerson = document.getElementById("newPerson");
newPerson.onclick = function() {
  getPerson();
};
