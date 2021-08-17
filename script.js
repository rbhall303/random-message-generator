const setups = ['You can do', 'You can be'];
const pronouns = ['anything', 'everyhing', 'whatever', 'all'];
const conclusions = ['you want', 'you set your mind to', 'your meant to', 'in the world'];

const getRand = (arr) => {
    const num = Math.floor(Math.random() * arr.length);
    return arr[num];
}

const generateMessage = () => {
    const setup = getRand(setups);
    const pronoun  = getRand(pronouns);
    const conclusion = getRand(conclusions);
    return setup + ' ' + pronoun + ' ' + conclusion + '!';
}

console.log(generateMessage());