API que faz o controle de estoque e tira pedidos dos produtos de uma empresa

Regras de negócio:

1- Não adicionar um produto com "nomeProduto" já existente (falta)


2- Para emitir um pedido utilizar um PATCH que subtrai o valor de "estoque" de /Produtos/ e faz um POST em /Vendas/  (feito)

    5- Se valor do estoque for 0 emitir aviso que está em falta e não emitir pedido(finalizar)

6- Para emitir um pedido utilizar um PATCH que subtrai o valor de estoque em Produtos e faz um POST em Vendas (feito)


SEGURANÇA:

Tamanho da senha para deletar  : 6 digitos (número+letra) (falta)


BÔNUS (SE DER TEMPO rs) :
lucro e relatorio semanal