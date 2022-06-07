export function getRandomItem(arr) {
    const random = Math.floor(Math.random() * arr.length);
    const randomItem = arr[random];
    return randomItem;
}

export function score(player, cpu) {
    switch (player) {
        case 'rock':
            if (cpu === 'rock') {
                return 0;
            }
            else if (cpu === 'paper') {
                return -1;
            }
            else {
                return 1;
            }
        case 'paper':
            if (cpu === 'rock') {
                return 1;
            } 
            else if (cpu === 'paper') {
                return 0;
            }
            else {
                return -1;
            }
        case 'scissors':
            if (cpu === 'rock') {
                return -1;
            }
            else if (cpu === 'paper') {
                return 1;
            }
            else {
                return 0;
            }
    }
}