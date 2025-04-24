const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTEwMGY0MDNkNGJlNTQxMDI4NzRlYWE4OWIzODdhOSIsIm5iZiI6MTczOTIxMzE3OC42NTI5OTk5LCJzdWIiOiI2N2FhNDk3YWZhYzU2YWM1OWU2ZmFmOGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bOZVS5tsIqYyUtf55RlcA5_zBerM9cW5jRiP9nuXpkY'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));