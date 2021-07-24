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


const apiOptions = (variables) => {
   options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    };
}

