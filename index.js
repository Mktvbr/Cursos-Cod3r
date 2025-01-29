const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const db = require('./db')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
var path = require('node:path')

const port = 3003
const app = express()

app.use(session({secret: 's4g134gre25y5y54h6'}))

app.engine('html', require('ejs').renderFile)
app.use(express.json())
app.use(bodyParser.urlencoded({extend:true}));

app.set('view engine','html');
app.use('/public',express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.post('/registrar', async (req, res) => {

    const {email,password} = req.body
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)
    
    const userExists = await db.findCustomer({email})
    console.log(userExists)
    if (userExists) {
        return res.status(422).json({ message:'usuario já existe'})
    }

    const custumer = {
        ...req.body,
        password: passwordHash,
    }

    const result = await db.insertCustomer(custumer)
    res.redirect('/')
    console.log(result)
}
)

app.post('/login', async (req, res) => {

    const {email, password} = req.body
    const usuario = await db.findCustomerEmail({email})

    function tokenResult (){
        const secret = process.env.SECRET

        const token = jwt.sign(
            {
                id: usuario._id,
            },
            secret,
        )
        res.status(200).json({ msg: "Autenticação realizada com sucesso", token })
    }

    try {




        if (!usuario) {
            return res.status(401).json({ error: "Usuário ou senha incorretos!" });
        }

        //compara a senha que usuario passou com a criptografada do banco de dados
        const senhaCorreta = await bcrypt.compare(password, usuario.password)
        if (!senhaCorreta) {
            return res.status(400).json({ error: "Senha incorreta!" });
        }

        tokenResult()

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao processar o login" });
    }
})

app.get('/',(req,res)=>{
    console.log(req.body.login)
    res.render('index.html')
})

app.get('/contato', (req,res) =>{
    res.render('contato.html')
})

app.get('/cursos', (req,res) =>{
    res.render('cursos.html')
})

app.post('/',(req,res)=>{
    res.render('index')
})
app.get('/login', (req,res) =>{
    res.render('login.html')
})

app.get('/registrar', (req,res) =>{
    res.render('cadastro.html')
})


app.listen(port,()=>{
    console.log('servidor rodando')
})
