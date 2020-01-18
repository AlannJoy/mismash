function groupAdultsByAgeRange(arr) {
  arr = arr.filter(person => person.age >= 18);

  if (!arr.length) {
    return {};
  } else {
    let result = {
      "20 and younger": [],
      "21-30": [],
      "31-40": [],
      "41-50": [],
      "51 and older": []
    };

    result = arr.reduce((acc, current) => {
      if (current.age <= 20) {
        acc["20 and younger"].push({ name: current.name, age: current.age });
      } else if (current.age >= 21 && current.age <= 30) {
        acc["21-30"].push({ name: current.name, age: current.age });
      } else if (current.age >= 31 && current.age <= 40) {
        acc["31-40"].push({ name: current.name, age: current.age });
      } else if (current.age >= 41 && current.age <= 50) {
        acc["41-50"].push({ name: current.name, age: current.age });
      } else if (current.age >= 51) {
        acc["51 and older"].push({ name: current.name, age: current.age });
      }

      return acc;
    }, result);

    const keys = Object.keys(result);
    keys.forEach(key => {
      if (result[key].length === 0) {
        delete result[key];
      }
    });

    return result;
  }
}

exports.groupAdultsByAgeRange = groupAdultsByAgeRange;
