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

export function GetSeason() {
  let d = new Date();
  let month = d.getMonth();

  if (month >= 0 && month <= 3)
    return "WINTER";

  if (month >= 4 && month <= 6)
    return "SPRING";

  if (month >= 7 && month <= 9)
    return "SUMMER";

  if (month >= 10 && month <= 12)
    return "FALL";
}

export function GetYear() {
  let d = new Date();
  return d.getFullYear();
}