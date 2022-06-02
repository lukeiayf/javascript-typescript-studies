//TIPOS PRIMITIVOS

type Primitive =  string | number | boolean | undefined | null | undefined;

//QUALQUER OUTRO TIPO NÃO É PRIMITIVO (objects e classes)

//TIPOS IMPLICITOS E EXPLICITOS

const impl_string = "typescript"; //string
const impl_number = 1; //number
const impl_boolean = true; //boolean
const impl_undefined = undefined; //undefined
const impl_null = null; //null
const impl_object = { name: "typescript" }; //object
const impl_array = [1, 2, 3]; //array

const expl_string: string = "typescript"; //string
const expl_number: number = 1; //number
const expl_boolean: boolean = true; //boolean
const expl_undefined: undefined = undefined; //undefined
const expl_null: null = null; //null
const expl_object: object = { name: "typescript" }; //object
const person: object = { name: "Lucas", lastName: "Silva", fullName: function (){
  return this.firstName + " " + this.lastName;
} }; //object
const expl_array: Array<number> = [1, 2, 3]; //array

//INTERFACES

interface AdressInterface { 
  adress: string;
  city: number;
}
//type
interface UserInterface {
  firstName: string;
  lastName: string;
  fullName: () => string;
  adress?: AdressInterface;
}
