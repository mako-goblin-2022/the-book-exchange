import request from 'superagent'

// to update existing user
export function updateUser(user) {
  return request
    .put('/api/v1/users')
    .set('authorization', `Bearer ${user.token}`)
    .send({ user })
}

// to register a new user
export async function addUser(user) {
  return request
    .post(`/api/v1/users`)
    .set('authorization', `Bearer ${user.token}`)
    .send(user)
    .then((res) => console.log(res))
}
