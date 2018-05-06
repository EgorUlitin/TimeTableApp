const faker = require('faker')
const jsonServer = require('json-server')

var groups = [{
  id: 1,
  name: 300301
}, {
  id:2,
  name: 300302
}, {
  id:3,
  name: 300303
}, {
  id:4,
  name: 300304
}];

let users = [];
let index = 1;

groups.map(group => {
  for(let i = 1; i <= faker.random.number({min: 15, max: 25}); i++) {
    let user = {
      id: index,
      groupId: group.id,
      name: faker.name.findName(),
      second_name: faker.name.lastName(),
      email: faker.internet.email(),
      role: 'Student',
      bio: faker.lorem.sentence(),
      image: faker.image.avatar()
    }

    users.push(user);
    index++;
  }
})

var classrooms = [
  {
    id: 1,
    name: 205
  },
  {
    id: 2,
    name: 206
  },
  {
    id: 3,
    name: 207
  },
  {
    id: 4,
    name: 208
  },
  {
    id: 5,
    name: 209
  },
]

let subjects = [
  {
    id: 1,
    name: 'Алгебра'
  },
  {
    id: 2,
    name: 'Матан'
  },
  {
    id: 3,
    name: 'Физкультура'
  },
  {
    id: 4,
    name: 'Философия'
  },
  {
    id: 5,
    name: 'Физика'
  }
]

let lectures = []
let indx = 1;

subjects.map(subject => {
  for(let i = 1; i <= faker.random.number({min: 15, max: 25}); i++) {
    let lecture = {
      id: indx,
      date: faker.date.future(1),
      classroomId: faker.random.number({min: 1, max: 5}),
      subject: subject.id,
      groupsId: faker.random.number({min: 1, max: 4})
    }

    lectures.push(lecture);
    indx++;
  }
})

let acad_perfs = []

const data = {
  users,
  groups,
  classrooms,
  subjects,
  lectures,
  acad_perfs
}

const server = jsonServer.create()
const router = jsonServer.router(data)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
});

