import chalk from "chalk";


const promptQRCode =[
    {
        name:"link",
        description:chalk.yellow("Digite o link para gerar o QR CODE "),

    },{
        name:"type",
        description: chalk.yellow("Escolha entre o tipo de QRcode (1- NORMAL ou (2- Terminal"),
        pattern:/^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas 1 ou 2")
    }
]

export default promptQRCode