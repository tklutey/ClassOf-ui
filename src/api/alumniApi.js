const headers = () => ({
  'Content-Type':'application/json',
  'charset':'utf-8',
})


export function getAllAlumni() {
  var configuration = {
    method: 'GET', headers
  }
  return fetch('http://localhost:5000/alumni', configuration)
    .then((response) => {
      return response.json()
    }).catch(error => {
      return error;
    })
}

  