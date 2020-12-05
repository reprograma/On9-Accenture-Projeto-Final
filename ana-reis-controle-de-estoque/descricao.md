API que faz o controle de estoque e tira pedidos dos produtos de uma empresa

Regras de negócio:

1- Não adicionar um produto com "nomeProduto" já existente


2- Para emitir um pedido utilizar um PATCH que subtrai o valor de "estoque" de /Produtos/ e faz um POST em /Vendas/ 
    3- Se o valor do estoque chegar a 10 emitir um aviso
    4- Se o valor do estoque chegar a 5 emitir aviso para efetuar novas compras
    5- Se valor do estoque for 0 emitir aviso que está em falta e não emitir pedido
6- Para emitir um pedido utilizar um PATCH que subtrai o valor de estoque em Produtos e faz um POST em Vendas


