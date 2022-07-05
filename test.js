let users = ['dimych', 'valera', 'artem', 'katya']

yo();
console.log(yo(), 'empty')

if (users.length > 4) {
    console.log(yo(), '1 if')
} else {

}

if (users.length < 2) {
    console.log(yo(), '2 if')
}

for (let i=0;i<1;i++) {

    console.log(yo(), 'for')
}

function yo() {
    return 'yo'
}
