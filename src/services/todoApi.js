const request = (path, method, body) => {
  return fetch(`${process.env.API_URL}${path}`, {
    method,
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

const post = (path, body) => request(path, 'POST', body);
const get = path => request(path, 'GET');
const patch = (path, body) => request(path, 'PATCH', body);
const del = path => request(path, 'DELETE');

export const postTodo = todo => post('/todos', todo);
export const getTodos = () => get('/todos');
export const getTodo = id => get(`/todos/${id}`);
export const patchTodo = id => patch(`/todos/${id}`);
export const deleteTodo = id => del(`/todos/${id}`);
