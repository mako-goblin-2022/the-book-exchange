import request from 'superagent'

export function updateUser(user) {
  return request
    .put('/api/v1/auth')
    .set('authorization', `Bearer ${user.token}`)
    .send({ user })
}

export async function addUser(user) {
  console.log('adduser api', user)
  return request
    .post(`/api/v1/auth`)
    .set('authorization', `Bearer ${user.token}`)
    .send(user)
    .then((res) => console.log(res))
}
