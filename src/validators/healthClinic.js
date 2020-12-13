const boroughs = [
    "Aguas Compridas", "Aguazinha", "Alto da Bondade", "Alto da Conquista", "Alto da Nacao", "Alto do Sol Nascente",
    "Alto Nova Olinda", "Amaro Branco", "Amparo", "Bairro Novo", "Bonsucesso", "Bultrins", "Casa Caiada", "Caixa d'Agua",
    "Carmo", "Corrego do Abacaxi", "Fragoso", "Guadalupe", "Jardim Atlantico", "Jardim Fragoso", "Jardim Brasil", "Jatoba",
    "Milagres", "Monte", "Ouro Preto", "Passarinho", "Peixinhos", "Rio Doce", "Santa Tereza", "Salgadinho", "Sao Benedito",
    "Sapucaia", "Sitio Novo", "Tabajara", "Umuarama", "Varadouro", "Vila Popular", "Zona Rural"
]


const validatingBorough = async (value) => {
    const validBorough = boroughs.includes(value);
    return validBorough
}

module.exports = {
    validatingBorough, 
    boroughs
}