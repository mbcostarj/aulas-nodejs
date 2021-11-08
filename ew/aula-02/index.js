/**
 * 0 Obter usuário
 * 1 obter nome do usuário, a partir do seu ID
 * 2 Obter o endereço do usuário, a partir do seu ID
 */

//Importando modulo interno do Node
const { error } = require('console')
const util = require('util')
const obterEnderecoUsuarioAsync = util.promisify(obterEnderecoUsuario)


function obterUsuario(usuario){
    //reject = erro
    //resolve = sucesso
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function(){
            
            //return reject(new Error("O erro foi a vera."))
            return resolve({
                id: 1,
                nome: "Miguel",
                dtNascimento: new Date()
            })

        },1000)
    })
    
}

function obterTelefone(idUsuario){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function(){
            return resolve({
                telefone: 992450336,
                ddd: 21
            })
        },2000)
    })
}

function obterEnderecoUsuario(idUsuario, callback){
    setTimeout(function(){
        return callback(null, {
            endereco: "Rua dos bobos",
            numero: 0
        })
    },3000)
}

/**
 * Conteúdo da aula de Resolução de promises com Async/Await
 * Adicionar a palavra async antes da função e a função retorna uma Promise.
*/
main()
async function main () {
    try{
        console.time('velocidade-promise')
        
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoUsuarioAsync(usuario.id)
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoUsuarioAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]

        console.log(`
                Nome: ${usuario.nome}
                Telefone: (${telefone.ddd}) ${telefone.telefone}
                Endereco: ${endereco.endereco}, ${endereco.numero}
            `)
        
        console.timeEnd('velocidade-promise')

    }catch{
        console.log("Deu ruim", error);
    }
}

// const usuarioPromise = obterUsuario()

// usuarioPromise
//     .then(function(usuario){
//         return obterTelefone(usuario.id)
//             .then(function resolverTelefone(result){
//                 return{
//                     usuario: {
//                         nome: usuario.nome,
//                         id: usuario.id
//                     },
//                     telefone: result
//                 }
//             })
//     })
//     .then(function(resultado){
//         console.log("Resultado", resultado)
//     })
//     .catch(function(error){
//         console.error("Deu ruim, danado. Pega! -> ", error)
//     })

// obterUsuario(function resolverUsuario(err, usuario){
//     if(err){
//         console.error("Erro no usuário", err)
//         return;
//     }

//     obterTelefone(usuario.id, function resolverTelefone(err1, telefone){
//         if(err1){
//             console.error("Erro no telelfone", err1)
//             return;
//         }

//         obterEnderecoUsuario(usuario.id, function resolverEnderecoUsuario(err2, endereco){
//             if(err2){
//                 console.error("Erro no endereço", err2)
//                 return;
//             }     
            
//             console.log(`
//                 Nome: ${usuario.nome}
//                 Telefone: (${telefone.ddd}) ${telefone.telefone}
//                 Endereco: ${endereco.endereco}, ${endereco.numero}
//             `)

//         })

//     })
    
// })