require('dotenv').config()
const express = require('express')
var morgan = require('morgan')
const cors = require('cors')

const app = express()
const Person = require('./models/person')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

morgan.token('post', function (res) { 
  return JSON.stringify( res.body ) 
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post'))

/*
let persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Martti Tienari",
      "number": "040-123456",
      "id": 2
    },
    {
      "name": "Arto Järvinen",
      "number": "040-123456",
      "id": 3
    },
    {
      "name": "Lea Kutvonen",
      "number": "040-123456",
      "id": 4
    }
]
*/

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/info', (req, res) => {
  Person.find({}).then(persons => {
    `<div>
      <p> Phonebook has info for ${persons.length} people<p>
      <p> ${new Date()} </p>
    </div>`
  })
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

/* 
const generateRandomId = () => {
  const randomId = Math.floor(Math.random() * Math.floor(100000));
  return randomId
}
*/

app.post('/api/persons', (request, response, next) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({ 
      error: 'name missing' 
    })
  }

  if (!body.number) {
    return response.status(400).json({ 
      error: 'number missing' 
    })
  }

  if (!body.name && !body.number) {
    return response.status(400).json({ 
      error: 'name and number missing' 
    })
  }

  /*
  if (body.name && persons.find(person => person.name.toLowerCase() === body.name.toLowerCase())) {
    return response.status(400).json({ 
      error: 'name must be unique' 
    })
  }
  */

  const person = new Person({
    name: body.name,
    number: body.number,
    // id: generateRandomId(),
  })

  person.save().then(savedPerson => {
    response.json(savedPerson.toJSON())
  })
  .catch(error => next(error))

  // persons = persons.concat(person)

  // response.json(person)
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson.toJSON())
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  if (error.name === 'CastError' && error.kind == 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    if (error.errors.name !== undefined) {
      if (error.errors.name.kind === 'unique') {
        return response.status(400).json({ error: 'name must be unique' })
      } 
      if (error.errors.name.kind === 'minlength') {
        return response.status(400).json({ error: 'name must have at least 3 characters' })
      }
    } 
    if (error.errors.number !== undefined) {
      if (error.errors.number.kind === 'minlength') {
        return response.status(400).json({ error: 'number must have at least 8 characters' })
      } 
    }
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)
  
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})