const express = require('express')
var morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(morgan('tiny'))

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

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/info', (req, res) => {
  res.send(
    `<div>
      <p> Phonebook has info for ${persons.length} people<p>
      <p> ${new Date()} </p>
    </div>`
  )
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
    
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

const generateRandomId = () => {
  const randomId = Math.floor(Math.random() * Math.floor(100000));
  return randomId
}

app.post('/api/persons', (request, response) => {
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

  if (body.name && persons.find(person => person.name.toLowerCase() === body.name.toLowerCase())) {
    return response.status(400).json({ 
      error: 'name must be unique' 
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateRandomId(),
  }

  persons = persons.concat(person)

  response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})
  
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})