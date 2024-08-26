export interface Pais {
    "ok": boolean;
    "data": PaisDetalle[]
}

export interface PaisDetalle {
    "_id": string;
    "nombre": string;
    "descripcion": string;
}