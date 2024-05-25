export function getMenuPositions() {
    return [
        {id: "new-orleans-burger", type: "burger", title: "New-Orleans burger", price: 30.99, description: "Beef patty 200g, champignon, tomato, onion, ketchup, mustard"},
        {id: "los-angeles-burger", type: "burger", title: "Los-Angeles burger", price: 32.99, description: "Beef patty 200g, cheddar x2, tomato, onion, ketchup"},
        {id: "new-york-burger", type: "burger", title: "New-York-City burger", price: 33.99, description: "Beef patty 200g, beacon x2, cheddar, salad, onion, ketchup"},
        {id: "miami-burger", type: "burger", title: "Miami burger", price: 35.99, description: "Beef patty 200g, breaded cheese, tomato, ketchup"},
        {id: "dallas-burger", type: "burger", title: "Dallas burger", price: 41.99, description: "Beef patty 200g x2, beacon, cheddar, salad, jalapeño, ketchup, mustard"},
        {id: "coca-cola", type: "drink", title: "Coca-Cola", price: 9.99, description: "Cold-Cola, 0.5l"},
        {id: "lemonade", type: "drink", title: "Lemonade", price: 11.99, description: "Self-made lemonade without sugar, 0.4l"},
        {id: "water", type: "drink", title: "Water", price: 6.99, description: "Nałęczowianka water, 0.5l"},
        {id: "beer-grodzisk", type: "drink", title: "Beer Browar z Grodziska", price: 10.99, description: "Browar z Grodziska classic, 0.5l"},
        {id: "beer-miloslaw", type: "drink", title: "Beer Miłosław", price: 10.99, description: "Miłosław IPA, 0.5l"},
        {id: "fried-potato", type: "starter", title: "Fried potato", price: 7.99, description: "Fried potato, 200g"},
        {id: "onion-rings", type: "starter", title: "Onion rings", price: 10.99, description: "Breaded onion rings, 150g"},
        {id: "nuggets", type: "starter", title: "Nuggets", price: 13.99, description: "Chicken nuggets with sauce, 6 pieces"},
        {id: "chicken-wings", type: "starter", title: "Chicken wings", price: 15.99, description: "Breaded chicken wings with sauce, 6 pieces"}
    ]
}

export function getPriceList() {
    return {
        bun: 3,
        beefPatty: 9,
        cheddar: 2,
        beacon: 2,
        champignon: 2,
        salad: 1,
        tomato: 1,
        jalapeno: 1,
        onion: 1,
        ketchup: 1,
        mustard: 1,
        service: 10,
        delivery: 7
    }
}