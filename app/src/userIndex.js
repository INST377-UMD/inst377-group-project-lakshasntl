const express = require('express')
var bodyParser = require('body-parser')
const supabaseClient = require('@supabase/supabase-js')
const app = express()
const port = 3000;
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

const supabaseUrl = 'https://iudlkwzaefvluuaasyux.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1ZGxrd3phZWZ2bHV1YWFzeXV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4NTc4NzEsImV4cCI6MjAxODQzMzg3MX0.AcVSBQA4bNb4HS98DUCwehHlXZsg2CUWe7UioyuMnbc'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get('/', (req, res) => {
    res.sendFile('public/INST377-Week10.html', { root: __dirname })
})

app.post('/users', async (req, res) => {
    console.log(`Getting Users`)
    
    const {data, error} = await supabase
    .from('Users')
    .select();

    if(error) {
        console.log(error)
    } else if(data) {
        res.send(data)
    }
})

app.post('/users', async (req, res) => {
    console.log('Adding Users')

    var username = req.body.username;
    var password = req.body.password;

    const {data, error} = await supabase
        .from('Users')
        .insert([
            {'username': username, 'password': password}
        ])
        .select();

    console.log(data)
    console.log(error)
    res.header('Content-type', 'application/json')
    res.send(data)
})

app.listen(port, () => {
    console.log('APP IS ALIVEEEEEE')
})