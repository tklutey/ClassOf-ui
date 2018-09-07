export function getAllAlumni() {
  var configuration = {
    method: 'GET',
    headers: {
      'Content-Type':'application/json',
      'charset':'utf-8',
    }
  }
  return fetch('http://localhost:5000/alumni', configuration)
    .then((response) => {
      return response.json()
    }).catch(error => {
      console.log(error)
      return error;
    })
}

export function createAlumni(alumni) {
  console.log('create')
  var configuration = {
    method: 'POST', 
    headers: {
      'Content-Type':'application/json'
    }, 
    body: JSON.stringify(alumni)
  }
  return fetch('http://localhost:5000/alumni', configuration)
    .then((response) => {
      return response.json()
    }).catch(error => {
      console.log(error)
      return error;
    })
}

  