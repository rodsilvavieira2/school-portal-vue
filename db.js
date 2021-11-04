const faker = require('faker')

const tests = Array.from({ length: 30 }).map((_, i) => ({
  id: i + 1,
  discipline: faker.lorem.words(5),
  professor: faker.name.firstName(),
  maxNote: faker.datatype.number(10),
  testDate: faker.date.future(),
  notes: {
    n1: faker.datatype.number(10),
    n2: faker.datatype.boolean() ? faker.datatype.number(10) : null,
    n3: faker.datatype.number(10),
    n4: faker.datatype.number(10)
  },
  recNote: null
}))

const status = ['pending', 'done', 'late', 'close']

const exercises = Array.from({ length: 30 }).map((_, i) => ({
  id: i + 1,
  name: faker.lorem.words(5),
  professor: faker.name.firstName(),
  discipline: faker.lorem.words(5),
  status: status[faker.datatype.number(3)],
  request_at: faker.date.past(),
  end_date: faker.date.future(),
  responses: Array.from({ length: 10 }).map((_, j) => ({
    id: 1 + j,
    fileName: faker.random.words(3),
    postAt: faker.date.recent(),
    attachment: faker.image.city()
  }))
}))

const classes = Array.from({ length: 40 }).map((_, i) => ({
  id: i + 1,
  date: faker.date.soon(),
  discipline: faker.lorem.words(5),
  content: faker.lorem.words(20),
  materials: Array.from({ length: 10 }).map((_, j) => ({
    id: 1 + j,
    name: faker.random.words(3),
    link: faker.image.city()
  }))
}))

const disciplines = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  name: faker.lorem.words(5),
  description: faker.lorem.words(200)
}))

const courses = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  name: faker.lorem.words(5),
  disciplines
}))

module.exports = () => {
  const data = {
    students: [
      {
        id: 1,
        name: 'Jessica Nunes',
        email: 'jessi@gmail.com',
        class: 't-001',
        courseID: 1,
        tests,
        exercises,
        classes
      }
    ],
    courses
  }

  return data
}
