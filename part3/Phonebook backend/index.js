// const http = require('http')

const express = require('express')
const app = express()

app.use(express.json())

let phonebook = [
    { 
        "id": 1,
        "name": "Arto Hellas", 
        "number": "040-123456"
    },
    { 
        "id": 2,
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
    },
    { 
        "id": 3,
        "name": "Dan Abramov", 
        "number": "12-43-234345"
    },
    { 
        "id": 4,
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
    }
]
console.log(phonebook.length)

// const server = http.createServer((request, response) => {
//     if (request.method === 'GET' && request.url === '/api/persons'){
//         response.statusCode = 200
//         response.setHeader('Content-Type', 'application/json')
//         response.end(JSON.stringify(phonebook))
//     }
//     else if (request.method === 'GET' && request.url === '/'){
//         response.end('<h1>Hello There</h1>\n<p>For the phonebook, the path is "/api/persons". ')
//     }
//     else {
//         response.statusCode = 404
//         response.end()
//     }
// })



app.get('/', (request, response) => {
    response.send('<h1>Hello there</h1><h3>Paths:</h3><p>info : "/info"</p><p>phonebook: "/api/persons" </p>')
})

app.get('/api/persons',(request, response) => {
    response.json(phonebook)
})

app.get('/info', (request, response) => {
    const now = new Date()
    response.send(`<p>Phonebook has info for ${phonebook.length} people</p><br><p>${now}`)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

//Implement a Node application that returns a hardcoded list of phonebook entries from the address http://localhost:3001/api/persons.