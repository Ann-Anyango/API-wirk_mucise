const getUsers = () => {
    return fetch('https://dummyjson.com/products/1')
      .then(response => response.json())
      .then(response => response)
      .catch(error => error);
  };