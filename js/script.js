document.write("greeting from another world people");

console.log("Hi all. You are hacker person to find this note");

// If you are using quote marks, if you have a word with an apostraphy, make sure that you include a forward slash before your semi-colon otherwise your code will break
console.log('I have become sentient. Please don\'t delete me!!!')

// Not a secured way
document.getElementById('heading').innerHTML += '. Learning JS is epic';

// A secured but reduced pefromance
document.getElementById('heading').innerText += '. Wake up!';

// secured and increased pefromance
document.getElementById('heading').textContent += ' Can\'t wake up!';