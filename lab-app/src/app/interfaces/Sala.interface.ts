import { Categoria } from "./Categoria.interface";
import { Escola } from "./Escola.interface"

export interface Sala
{
  id: number,
  designation:string
  category: Categoria,
  isoperational:boolean
  school: Escola;
}
