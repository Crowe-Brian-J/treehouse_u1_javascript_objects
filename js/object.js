/*
  arrays use index value, where objects use dot notation
  -instead of person[0] to access name, you would use person.name to access Edward
*/

const person = {
  name: 'Edward',
  city: 'New York',
  age: 37,
  isStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
}

const message = `Hi, I'm ${person.name}. I live in ${person.city}.`
console.log(message)
