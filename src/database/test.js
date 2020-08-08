const Database = require('./db')

Database.then((db) => {
    // Inserir dados

    proffy = {
        name: "Marcio Godoy",
        avatar: "https://avatars3.githubusercontent.com/u/33956393?s=460&u=10e4570a6732eb6f19fe7b70733179ff3d5e3088&v=4",
        whatsapp: "1234567891011",
        bio: "Entusiasta das melhores tecnologias de desenvolvimento de software. Apaixonado em estudar novas tecnologias e ficar por dentro das novidades do mundo geek.",
        subject: "Engenharia de Software",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    }

    classValue = {
        subject: "Quimíca",
        cost: "20"
        //O proffy id virá pelo banco de dados
    }

    classSchedule = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // Consultar os dados inseridos
})