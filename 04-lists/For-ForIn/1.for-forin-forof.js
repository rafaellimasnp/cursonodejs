const service = require('./services')

async function main(){
    try {
        const result = await service.obterPessoas('a')
        const names =[]

        console.time('for')
        for(let i=0; i <= result.results.length -1; i++){
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('for')

        console.time('forIn')
        for(let i in result.results){
            const pessoa = result.results[i]
            names.push(pessoa.name)
        
        }
        console.timeEnd('forIn')

        console.time('forOF')

        for(pessoa of result.results){
            names.push(pessoa.name)
        }

        console.timeEnd('forOF')

        console.log('Names: ',names)
        
    } catch (error) {
        console.error('erro interno',error)
    }
}

main();