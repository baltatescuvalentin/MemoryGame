const cards = [
    {
        id: 1,
        path: '../images/1.ico',
        name: 'Yugi Mutou',
    },
    {
        id: 2,
        path: '../images/2.ico',
        name: 'Yami Yugi',
    },
    {
        id: 3,
        path: '../images/3.ico',
        name: 'Yami Marik',
    },
    {
        id: 4,
        path: '../images/4.ico',
        name: 'Marik Ishtar'
    },
    {
        id: 5,
        path: '../images/5.ico',
        name: 'Bakura Ryou',
    },
    {
        id: 6,
        path: '../images/6.ico',
        name: 'Yami Bakura',
    },
    {
        id: 7,
        path: '../images/7.ico',
        name: 'Joey Wheeler',
    },
    {
        id: 8,
        path: '../images/8.ico',
        name: 'Seto Kaiba',
    },
    {
        id: 9,
        path: '../images/9.ico',
        name: 'Mokuba Kaiba',
    },
    {
        id: 10,
        path: '../images/10.ico',
        name: 'Tristan Taylor',
    },
    {
        id: 11,
        path: '../images/11.ico',
        name: 'Duke Delvin',
    },
    {
        id: 12,
        path: '../images/12.ico',
        name: 'Téa Gardner',
    },
    {
        id: 13,
        path: '../images/13.ico',
        name: 'Mai Valentine',
    },
    {
        id: 14,
        path: '../images/14.ico',
        name: 'Serenity Wheeler',
    },
    {
        id: 15,
        path: '../images/15.ico',
        name: 'Ishizu Ishtar',
    },
    {
        id: 16,
        path: '../images/16.ico',
        name: 'Pegasus J. Crawford',
    },
]

function shuffleCards(cards) {
    const auxCards = cards.map(c => c);
    const newCards = [];

    for(let i = 0; i < 16; i++) {
        const position =  Math.floor(Math.random() * (auxCards.length));
        const card = auxCards[position];
        newCards.push(card);
        auxCards.splice(position, 1);
    }
    return newCards;
}

export { cards, shuffleCards }