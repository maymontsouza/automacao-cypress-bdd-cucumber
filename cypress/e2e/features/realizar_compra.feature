
#language:pt
Funcionalidade: Realizar compra

    @adicionar_produtos_carrinho
    Cenário: Realizar compra adicionando quatro produtos ao carrinho, removendo um produto e finalizando a compra
        Dado que estou na tela de produtos
        Quando clico para adicionar produto ao carrinho de compras
        Quando clico para remover produto do carrinho de compras
        Então clico para realizar checkout confirmando os dados e finalizo a compra


