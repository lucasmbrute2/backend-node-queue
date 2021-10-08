import mail from "../lib/mail"

export default{
    key: "RegistrationMail",
    async handle({ data }){
        
        const { user } = data;
         
        await mail.sendMail({
            from : " Lucas Souza <lucasmbrute614@gmail.com>",
            to: "lucasmbrute614@gmail.com",
            html: `Existem ${user.api.data.length} itens ${user.word} disponíveis no estoque.`
        })
    }
}