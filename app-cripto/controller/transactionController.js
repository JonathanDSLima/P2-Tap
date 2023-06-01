let database = require('../data/database')

const coins = [
    {
        coindId: 1,
        name: 'bitcoin',
        priceBuy: 1500,
        priceSeller: 1200
    },
    {
        coindId: 2,
        name: 'ethereum',
        priceBuy: 1000,
        priceSeller: 800
    },
    {
        coindId: 3,
        name: 'binance-coin',
        priceBuy: 100,
        priceSeller: 120
    },
    {
        coindId: 4,
        name: 'xrp',
        priceBuy: 500,
        priceSeller: 450
    }
]

function getTransaction(id) {
    return database.find(transaction => transaction.id === +id)
}

function getCarteira() {
    let auxCompras = database.filter(transaction => transaction.typeAction == "compra")
    let auxVendas = database.filter(transaction => transaction.typeAction == "venda")

    let total_de_compras = 0
    auxCompras.forEach(element => { total_de_compras += element.priceBuy});
    let total_de_vendas = 0
    auxVendas.forEach(element => { total_de_vendas += element.priceSeller});
    return [total_de_compras, total_de_vendas]
}

module.exports = (router) => {

    const urlBase = '/transactions'
    const urlTotalCompras = "/compras"
    const urlTotalVendas = "/vendas"
    const urlTotalCarteira = "/carteira"

    router.get(urlBase, (request, response) => { 
        response.json(database)
    })

    router.get(urlBase + '/:id', (request, response) => {
        const id = request.params.id
        const transaction = getTransaction(id)
        response.json(transaction)
    })

    router.get(urlTotalCompras, (request, response) => {
        let aux = database.filter(transaction => transaction.typeAction == "compra")
        let total = 0;
        aux.forEach(element => { total += element.priceBuy});
        response.json({
            compras: aux,
            total_de_compras: total
        })
    })

    router.get(urlTotalVendas, (request, response) => {
        let aux = database.filter(transaction => transaction.typeAction == "venda")
        let total = 0;
        aux.forEach(element => { total += element.priceSeller});
        response.json({
            compras: aux,
            total_de_vendas: total
        })
    })

    router.get(urlTotalCarteira, (request, response) => {
        response.json({
            total_da_carteira: getCarteira()[1] - getCarteira()[0]
        })
    })

    router.post(urlBase, (request, response) => {
        let aux = { }
        if(request.body.coinName && request.body.quantity &&  request.body.typeAction) {
            if(request.body.typeAction == "compra") {
                const newTransaction = {
                    id: database.length + 1,
                    coinName: request.body.coinName,
                    quantity: request.body.quantity,
                    priceBuy: request.body.quantity * coins.find((coin) => request.body.coinName === coin.name).priceBuy,
                    priceSeller: 0,
                    data: new Date().toLocaleDateString(),
                    typeAction: "Compra"
                }
                aux = newTransaction
            } else if (request.body.typeAction == "venda"){
                const newTransaction = {
                    id: database.length + 1,
                    coinName: request.body.coinName,
                    quantity: request.body.quantity,
                    priceBuy: 0,
                    priceSeller: request.body.quantity * coins.find((coin) => request.body.coinName === coin.name).priceSeller,
                    data: new Date().toLocaleDateString(),
                    typeAction: "venda"
                }
                aux = newTransaction
            }
        database.push(aux)
        response.status(201).send(aux)
        } else {
            response.status(400).send("Campos em branco ou faltando :( https://http.cat/400")
        }
        
        
    })

    router.put(urlBase + '/:id', (request, response) => {
        
        let transaction = getTransaction(request.params.id)
        if(transaction == undefined){
            response.status(404).send('Transação não encontrada no seu histórico :( https://http.cat/404')
        } else {
            transaction.coinName = request.body.coinName
            transaction.quantity = request.body.quantity
            transaction.priceBuy = request.body.priceBuy
            transaction.priceSeller = request.body.priceSeller
            transaction.data = request.body.data
            transaction.typeAction = request.body.typeAction
            response.json(transaction)
        }
    })

    router.delete(urlBase + '/:id', (request, response) => {
        let transaction = getTransaction(request.params.id)
        if(transaction == undefined){
            response.status(404).send('Transação não encontrada no seu histórico :( https://http.cat/404')
        }else {
            const newList = database.filter(item => item.id != request.params.id)
            database = newList
            response.status(200).send('Transação apagada do histórico :) https://http.cat/200')
        }
    })

}