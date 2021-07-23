export function handleResponse(response) {
  return response.json().then(function (json) {
    return response.ok ? json : Promise.reject(json);
  });
}

export function handleData(data) {
  console.log(data);
}

export function handleError(error) {
  console.error(error);
}
