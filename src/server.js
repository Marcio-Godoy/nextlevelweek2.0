//Dados
const proffys = [
    {
        name: "Marcio Godoy",
        avatar: "https://avatars3.githubusercontent.com/u/33956393?s=460&u=10e4570a6732eb6f19fe7b70733179ff3d5e3088&v=4",
        whatsapp: "1234567891011",
        bio: "Entusiasta das melhores tecnologias de desenvolvimento de software. Apaixonado em estudar novas tecnologias e ficar por dentro das novidades do mundo geek.",
        subject: "Engenharia de Software",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Valéria",
        avatar: "https://avatars3.githubusercontent.com/u/33956393?s=460&u=10e4570a6732eb6f19fe7b70733179ff3d5e3088&v=4",
        whatsapp: "1234567891011",
        bio: "Entusiasta das melhores tecnologias de desenvolvimento de software. Apaixonado em estudar novas tecnologias e ficar por dentro das novidades do mundo geek.",
        subject: "Desenvolvimento web",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Portugês",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

//Funcionalidades
function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    //Se tiver dados
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

        //Adicionar dados a lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }
    //Se não, mostrar a página
    return res.render("give-classes.html", { subjects, weekdays })
}

//Servidor
const express = require('express')
const server = express()

//Configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Início e configuração do servidor
server
    //Configurar aquivos estáticos (css, scripts, imagens)
    .use(express.static("public"))
    //Rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    //Start do servidor
    .listen(5500)

