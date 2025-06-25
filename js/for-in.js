/*
  for-in loops of objects
    - for (let key in object) {do something}
    -- key stays the same but is used as a placeholder/variable: could be x, y, zebra (doesn't matter)
    -- easier to just use key
    -- object should be name of object (as below, person)
    -- iterates over each key in object
    --- {console.log(person.key)} inside curly braces would log name, nickname, city, age, etc to console
    --- to access value would look like {console.log(person[key])}
    ---- key is the iterable, so this would look like person[name], person[nickname] as it goes through list
*/

const person = {
  name: 'Edward',
  nickname: 'Duke',
  city: 'New York',
  age: 37,
  isStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
}

for (let key in person) {
  //console.log(key); <-- Logs key like name, nickname
  console.log(`${key}: ${person[key]}`) //cannot use ${person.key} (Looks for person.key which doesn't exist)
}
