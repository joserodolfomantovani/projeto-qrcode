import chalk from "chalk"

const mainPrompt =[
    {
        name:"select",
        description:chalk.yellow.bold("Escolha a ferramneta (1 - QRCODE ou  (2 -PASSWORD"),
        pattern:/^[1-2]+$/,
        message:chalk.red.italic("Escolha apenas entre 1 e 2"),
        require:true,
    }
]


export default mainPrompt