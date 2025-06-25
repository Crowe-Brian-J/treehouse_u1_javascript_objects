/*
  arrays use index value, where objects use dot notation
  -instead of person[0] to access name, you would use person.name to access Edward

  Can change or add key value pairs using dot notation =
  -person.city = 'Boston'; (because it's better) would change city from 'New York' to Boston
*/

const person = {
  name: 'Edward',
  city: 'New York',
  age: 37,
  isStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
}

person.nickname = 'Duke'
const message = `Hi, I'm ${person.name}. I live in ${
  person.city
}. Most know me as ${person.nickname}. My age is ${person.age + 1}. I have ${
  person.skills.length
} skills: ${person.skills.join(', ')}.`
console.log(message)
