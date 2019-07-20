import { Injectable } from '@angular/core';

@Injectable()
export class EdilesService{
    private ediles:Edil[] = [
        {
            nombre: "Fernando Moreira",
            nodo: "3",
            contacto: "3003320645",
            imagen: "assets/img/fernando.jpg"
        },
        {
            nombre: "Mariana Villada Mazo",
            nodo: "1",
            contacto: "3003948521",
            imagen: "assets/img/mariana.jpg",
        },
        {
            nombre: "Luz Adriana Arcila",
            nodo: "4",
            contacto: "3003951858",
            imagen: "assets/img/adriana-arcila.jpg",
        },
        {
            nombre: "Norma Naranjo",
            nodo: "3",
            contacto: "3104428742",
            imagen: "assets/img/norma.jpg",
        },
        {
            nombre: "Patricia Zapata",
            nodo: "2",
            contacto: "3005153746",
            imagen: "assets/img/patricia.jpg",
        },
        {
            nombre: "Adriana Perez",
            nodo: "4",
            contacto: "3003952380",
            imagen: "assets/img/adriana-perez.jpg",
        },
        {
            nombre: "Martha David P",
            nodo: "3",
            contacto: "3003951210",
            imagen: "assets/img/martha.jpg",
        }
    ]

    getEdiles(){
        return this.ediles;
    }

}

export interface Edil{
    nombre:string;
    nodo:string;
    contacto:string;
    imagen:string;
}