const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImFiMjIyNjJjLWVmZjMtNDU2Ny04MzAyLTQwYjlmMjBhYWFjZS0xNjc3Nzk4OTMyNTQ0IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNjgxZDgxMWItYWRiNS00MjYxLTg4MjktOTJkNWNhNDRjYWIwIiwidHlwZSI6InQifQ.9CadK8GxkM9JULgg2lNJmGLVG4t3sKHVsWU8vOEhlL0'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args); 
})
.catch((err) => {
 console.error(err)
})
