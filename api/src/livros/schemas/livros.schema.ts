import * as Mongoose  from "mongoose";

export const LivrosSchema = new Mongoose.Schema({
    nomeDoLivro: String,
    descricaoDoLivro: String,
    autorDoLivro: String,
    precoDoLivro: String,
    anoDePublicacaoDoLivro: String,
    editoraDoLivro: String
});