import {Document} from "mongoose";

export  interface Livros  extends Document{
    nomeDoLivro: string;
    descricaoDoLivro: string;
    autorDoLivro: string;
    precoDoLivro: string;
    anoDePublicacaoDoLivro: string;
    editoraDoLivro: string;
}