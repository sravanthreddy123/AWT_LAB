const express = require('express')
const fs = require('fs')
const app = express()
// const jwt = require('jsonwebtoken')
// const secretKey = 'ksjfl;sjd'

// app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const readStudData = () => {
	return JSON.parse(fs.readFileSync('./students.json'))
}
const writeStudData = (data) => {
	fs.writeFileSync('./students.json', JSON.stringify(data))
}
app.get('/', (req, res) => {
	const studData = readStudData()
	res.json(studData)
})
	app.post('/', (req, res) => {
		const studData = readStudData()
		const newStud = req.body
		studData.push(newStud)
		writeStudData(studData)
		res.json(studData)
	})
	app.put('/', (req, res) => {
		const studData = readStudData()
		const stud = req.body
		const curStud = studData.find((s) => s.id === stud.id)
		curStud.name = stud.name
		curStud.branch = stud.branch
		writeStudData(studData)
		res.json(studData)
	})
	app.delete('/', (req, res) => {
		let studData = readStudData()
		const { id } = req.body
		studData = studData.filter((stud) => stud.id !== id)
		writeStudData(studData)
		res.json(studData)
	})

// app.post('/signUp', (req, res) => {
// 	const user = req.body
// 	const token = jwt.sign({ user }, secretKey)
// 	res.json(token)
// })

// app.post('/login', async (req, res) => {
// 	req.token = req.headers['authorization'].split(' ')[1]
// 	const user = jwt.verify(req.token, secretKey)
// 	res.json(user)
// })

app.listen(8080, () => console.log('Server is listening....'))