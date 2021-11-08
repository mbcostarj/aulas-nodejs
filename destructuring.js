const user = {
    firstName: 'Miguel',
    lastName: 'Costa',
    age: 32,
    social: {
        github: 'https://linkedin/in/mrcosta',
    },
    skills: {
        frontend: {
            languages: [ 'HTML', 'CSS', 'JavaScript' ],
        },
        backend: {
            languages: [ 'JavaScript', 'PHP' ],
        }
    },
};

function destructuringUser({ firstName:nome, lastName:sobrenome, age:idade, country:nacionalidade = "Brasil", social: {github} , skills: {backend} }){
    console.log(`
        Nome Completo: ${nome} ${sobrenome}
        Idade: ${idade}
        Nacionalidade: ${nacionalidade}
        GitHub: ${github}
        Habilidades: ${backend.languages}
    `);
}

destructuringUser(user)

const { 
    firstName:nome,
    lastName:sobrenome,
    age:idade,
    social: {github},
    skills: { 
        backend,
        frontend = "Não informado"
    }
} = user;

console.log(` ${github} - ${backend.languages} - ${frontend.languages} `);