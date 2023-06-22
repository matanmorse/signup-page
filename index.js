const form = document.forms[0];

const nameInput = document.querySelector('input#name');
const levelInput = document.querySelector('input#level');
const classInput = document.querySelector('select');
const specialSkillsInput = document.querySelector('input#special-skills');
const personalInfo = document.querySelector('textarea');

console.log(nameInput)

const submitButton = document.querySelector('button[type="submit"]')

submitButton.addEventListener('click', event => {
    console.log('click')
    validateClass();
    validateLevel();
    validateName();
    if(!validateClass() || !validateLevel() || !validateName()) {
        const spans = document.querySelectorAll('span.red');
        spans.forEach(span => {span.innerHTML = "*REQUIRED"});
    }
})

const validateName = () => {
    if (!nameInput.value) {
        nameInput.style.borderColor = 'red';
        return false;
    }
    else {
        nameInput.style.borderColor = 'green'
        return true;
    }
}

const validateClass = () => {

    if (!classInput.value) {
        classInput.style.borderColor = 'red';
        return false;
    }
    else {
        classInput.style.borderColor = 'green';
        return true;
    }
}
const validateLevel = () => {
    if (levelInput.value < 1 || levelInput.value > 20 || isNaN(levelInput.value)) {
        levelInput.style.borderColor = 'red'
        return false;
    }
    else {
        levelInput.style.borderColor = 'green'
        return true; 
    }
}


const validateNotRequired = event => {
    event.target.style.borderColor = 'green'
    return true;
}

// add validation for each button
nameInput.addEventListener('change', validateName);
levelInput.addEventListener('change', validateLevel)
classInput.addEventListener('change', validateNotRequired)
specialSkillsInput.addEventListener('change', validateNotRequired)
personalInfo.addEventListener('change', validateNotRequired)

