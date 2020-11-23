export class Producto {
    id?: string;
    _id?: string;
    name: string;
    description: string;
    category?: string;
    state?: boolean;
    imgs?: string[] = [];
}