import permittedCharacters from "./utils/permitted-characters"


async function handle() {
    let characteres = []
    let password = ""

    let passwordLength = process.env.PASSWORD_LENGTH
    characteres = await permittedCharacters()

   
    for(let i = 0; i < passwordLength; i++){
        const index =Math.floor(Math.random() * characteres.length)
        password += characteres[index]
    }

    return password
}

export default handle