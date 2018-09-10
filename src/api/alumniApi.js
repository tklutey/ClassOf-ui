const base_url = 'http://localhost:5000/'

export function getAllAlumni() {
  var configuration = {
    method: 'GET',
    headers: {
      'Content-Type':'application/json',
      'charset':'utf-8',
    }
  }
  return fetch(base_url + 'alumni', configuration)
    .then((response) => {
      return response.json()
    }).catch(error => {
      console.log(error)
      return error;
    })
}

export function searchAlumni(query) {
  var configuration = {
    method: 'GET',
    headers: {
      'Content-Type':'application/json',
      'charset':'utf-8',
    },
    
  }
  var url = base_url + 'search?query=' + query;
  return fetch(url, configuration)
    .then((response) => {
      return response.json()
    }).catch(error => {
      console.log(error)
      return error;
    })
}

export function createAlumni(alumni) {
  var configuration = {
    method: 'POST', 
    headers: {
      'Content-Type':'application/json'
    }, 
    body: JSON.stringify(alumni)
  }
  return fetch(base_url + 'alumni', configuration)
    .then((response) => {
      return response.json()
    }).catch(error => {
      console.log(error)
      return error;
    })
}

  