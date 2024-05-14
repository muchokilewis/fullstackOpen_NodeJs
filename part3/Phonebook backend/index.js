const http = require('http')

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

const server = http.createServer((request, response) => {
    if (request.method === 'GET' && request.url === '/api/persons'){
        response.statusCode = 200
        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(phonebook))
    }
    else if (request.method === 'GET' && request.url === '/'){
        response.end('<h1>Hello There</h1>\n<p>For the phonebook, the path is "/api/persons". ')
    }
    else {
        response.statusCode = 404
        response.end()
    }
})

const PORT = 3001
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

//Implement a Node application that returns a hardcoded list of phonebook entries from the address http://localhost:3001/api/persons.