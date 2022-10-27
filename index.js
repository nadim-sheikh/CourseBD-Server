const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PROT || 5000;

app.use(cors())

const categories = require('./data/categories.json')
const course = require('./data/courses.json')

app.get('/', (req, res) => {
  res.send('This is Rifat API')
})

app.get('/course-categories', (req, res) => {
  res.send(categories);
})

app.get('/course', (req, res) =>{
  res.send(course)
})


app.get('/course/:id', (req, res) =>{
  const id =req.params.id;
  console.log(id);
  const selectedCourse = course.find(c => c._id === id);
  res.send(selectedCourse);
})


app.get('/category/:id',(req, res) =>{
  const id = req.params.id;
  if(id === '06'){
    res.send(course);
  }
  else{
    const categoryCourse = course.filter(c => c.category_id === id);
    res.send(categoryCourse);
  }
})



app.listen(port, () => {
  console.log('This is my Online Learning platform Api', port)
})
