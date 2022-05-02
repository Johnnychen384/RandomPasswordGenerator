const randomCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','~','!','@','#','$','%','^','&','*','(',')','=']
const generateBtn = document.getElementById('generate-btn')
let randomValueHolder = []
const listOne = document.getElementById('list1')
const listTwo = document.getElementById('list2')
const listThree = document.getElementById('list3')
const listFour = document.getElementById('list4')
let itsAlive = false

generateBtn.addEventListener("click", function(){
    if (itsAlive === false){
        let lengthOfPassword = document.getElementById('length').value
        randomPasswordGenerator(lengthOfPassword)
        listOne.innerHTML += randomValueHolder
        randomValueHolder = []
        randomPasswordGenerator(lengthOfPassword)
        listTwo.innerHTML += randomValueHolder
        randomValueHolder = []
        randomPasswordGenerator(lengthOfPassword)
        listThree.innerHTML += randomValueHolder
        randomValueHolder = []
        randomPasswordGenerator(lengthOfPassword)
        listFour.innerHTML += randomValueHolder
        itsAlive = true
    } else {

    }
})


function randomPasswordGenerator(passwordLength){
    for (let i = 0; i < passwordLength; i++){
        let randomIndexNumber = Math.floor(Math.random() * randomCharacters.length) + 1
        randomValueHolder += randomCharacters[randomIndexNumber]
    }
}