let awesomeName: string  = 'shakeAndBake';
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);

//awesomeName = 20;

let amount: number = 20;
amount = 12-1;
//amount = 'pants';

let isAwesome = true;
isAwesome = false;
//isAwesome = 'shakeAndBake';

//CHALLENGE
let greeting: string = 'Hello, Typescript!'
greeting = greeting.toLowerCase();

let age: number = 26;
age = age + 5;

let isAdult: boolean = age >=18;
isAdult = !isAdult;
console.log(isAdult);

// greeting = 15;
// age = 'thirty';
// isAdult = 'yes';

console.log(greeting, age, isAdult);

//UNIONS
let tax: number | string = 10;
tax = 100;
tax = '$10';

let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success'
requestStatus = 'error'
//requestStatus = 'random'

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;

let random;

//TYPE ANNOTATION
const books = ['1984', 'Brave New World'];

let foundBook: string | undefined;

for (let book of books){
  if(book === '1984'){
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log(foundBook?.length);

//Challenge
let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
orderStatus = 'delivered';
//orderStatus = 'cancelled';

let discount: number | string = 20;
discount = '20%';
//discount = true;

//ARRAYS
let prices: number[] = [100, 75, 42];
//prices.push('hello');

let fruit: string[] = ['apple', 'orange'];

//let randomValues: [] = ['hello']
let emptyValues: number[] = [] //we do not want it to be any type

let names = ['peter', 'susan', 1];
let array: (string | boolean)[] = ['apple', true, 'orange']

//challenge
let temperatures: number[] = [12, 5, 8, 1]
//temperatures.push('dog');
let colors: string[] = ['blue', 'white'];
//colors.push(false);
let mixedArray: (number | string)[] = [1, 2, 'mix', 'array'];
//mixedArray.push(true);

//OBJECTS
let car: { brand: string; year: number } = {
  brand: 'toyota', 
  year: 2020
};
car.brand = 'ford';
//car.color = 'blue';

let car1: { brand: string; year: number } = {
  brand: 'ford', 
  year: 2024
};

let book = {title: 'book', cost: 20};
let pen = {title: 'pen', cost: 10};
let notebook = {title: 'notebook'};

let items: {readonly title: string; cost?: number}[] = [book,pen, notebook];
//items[0].title = 'new book';

let bike: { brand: string, year: number } = {
  brand: 'knapp',
  year: 2023
}
//bike.year = '2023';

// let laptop: { brand: string, year: number } = {
//   brand: 'hp'
// }

let product1 = {title: 'kiwi', price: 6};
let product2 = {title: 'apple'};
let products: { title: string; price?: number}[] = [product1, product2];
//products.push({title: 'banana', price: '5'});

//FUNCTIONS
function sayHi(name: string){
  console.log(`Hello there ${name.toUpperCase()}`); 
}
sayHi('john');
//sayHi(3);

function calculateDiscount(price: number): number{
  const hasDiscount = true;

  if(hasDiscount){
    return price;
    //return 'Discount Applied';
  }
  return price * 0.9;
}
const finalPrice = calculateDiscount(200);

//challenge
let firstNames: string[] = ['john', 'susan', 'peter'];

function inArray(name: string): boolean {
  return firstNames.includes(name);
}

let nameToCheck = 'lola';

if(inArray(nameToCheck)){
  console.log(`${nameToCheck} is in the list`);
}else{
  console.log(`${nameToCheck} is not in the list`);
}

//OPTIONAL AND DEFAULT PARAMETERS IN FUNCTIONS
function calculatePrice(price: number, discount?: number){
  return price - (discount || 0);
}
let priceAfterDiscount = calculatePrice(200, 20);

function calculateScore(
  initialScore: number, 
  penaltyPoints: number = 0
  ): number {
  return initialScore - penaltyPoints;
}
let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(300);

function logMessage(message: string): void {
  console.log(message); 
  //return 'hello world';
}
logMessage('Hello, Typescript');

//UNION TYPES & TYPECARDS
//challenge
function processInput(input: string | number){
  if(typeof input === 'number'){
    console.log(input *2);
  }else{
    console.log(input.toUpperCase());
  }
}
processInput('map');

function createEmployee({id}:{id: number}): {id: number; isActive: boolean}{
  return {id, isActive: id % 2 === 0}
};

const first = createEmployee({id: 1});
const second = createEmployee({id: 2});
console.log(first, second);

//alternative
function createStudent(student: {id: number, name: string}): void{
  console.log(`Welcome to the course ${student.name.toUpperCase()}`);
}

const newStudent = {
  id: 5,
  name: 'anna',
  email: 'anna@gmail.com'
}

createStudent(newStudent);
//createStudent({id: 1, name: 'bob', email: 'bobo@gmail.com'});

//challenge
function processData(input: string | number, config: {reverse: boolean} = {reverse: false}): string | number {
  if(typeof input === 'number'){
    return input*input;
  }else{
    return config.reverse
    ? input.toUpperCase().split('').reverse().join('')
    : input.toUpperCase();
  }
}
console.log(processData('awesome', {reverse: true}));
console.log(processData(10));

//TYPE ALIAS
//export
type User = {id: number; name: string; isActive: boolean};

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  return user;
}

//challenge
type Employee = {id: number; name: string; department: string};
type Manager = {id: number; name: string; employees: Employee[]};

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void{
  if('employees' in staff){
    console.log(`${staff.name} is a manager of ${staff.employees.length} employees`);
  }else{
    console.log(`${staff.name} is an employee in the ${staff.department}`);
  }
}

const alice: Employee = { id:1, name:'alice', department:'Sales'};
const steve: Employee = { id:1, name:'steve', department:'HR'};

const bob: Manager = { id:1, name:'bob', employees: [alice, steve]};

printStaffDetails(alice);
printStaffDetails(bob);

//INTERSECTION TYPE
type Book = {id: number; name: string; price:number};
type DiscountedBook = Book & {discount: number};

const book1: Book = {
  id:1,
  name: 'how to cook a dragon',
  price: 15
}

const book2: Book = {
  id:2,
  name: 'the secret life of unicorns',
  price: 18
}

const discountedBook: DiscountedBook = {
  id:3,
  name: 'Gnomes vs. Goblins',
  price: 25,
  discount: 0.15
}

//INTERFACE
interface Literature{
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  //method
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
}

const deepWork: Literature = {
  isbn:123,
  title: 'deep work',
  author: 'cal newport',
  //genre: 'self-help'
  printAuthor(){
    console.log(this.author);  
  },
  printTitle(message){
    return `${this.title} ${message}`
  },
  //first option
  // printSomething:function(someValue){
  //   return someValue;
  // }
  //second option
  // printSomething:(someValue) => {
  //   //console.log(this);
  //   console.log(deepWork.author);
  //   return someValue
  // }
  //third option
  printSomething(someValue){
    return someValue;
  }
}

//deepWork.isbn = 'some value';

//METHODS IN INTERFACES
deepWork.printAuthor();
const result = deepWork.printTitle('is an awesome book');
console.log(result);
console.log(deepWork.printSomething(34));

//challenge
interface Computer{
  readonly id: number; 
  brand: string; 
  ram: number; 
  storage?: number;
  upgradeRam(value: number): number;
}

const memory: Computer = {
  id: 1,
  brand: 'dell',
  ram: 25,
  upgradeRam(value){
    this.ram += value;
    return this.ram;
  }
}

console.log(memory.upgradeRam(3));

//EXTENDING INTERFACES
interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

interface Person{
  age: number;
}

const person: Person = {
  name: 'john',
  age: 30,
  getDetails(){
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

interface Employed extends Person {
  employeeId: number;
}

const employee: Employed = {
  name: 'jane',
  age: 28,
  employeeId: 123,
  getDetails(){
    return `Name: ${this.name}, Age: ${this.age},
    EmployeeId: ${this.employeeId}`;
  }
}

console.log(person.getDetails());
console.log(employee.getDetails());

interface Managerial extends Person, DogOwner{
  managePeople(): void;
}

const manager: Managerial = {
  name: 'bob',
  age: 35,
  dogName: 'rex',
  getDetails(){
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails(){
    return `Name: ${this.dogName}`;
  },
  managePeople(){
    console.log('Managing people...');
  }
}

console.log(manager);
manager.managePeople();

//challenge

function getEmployee(): Persona | DogsOwner | Manage {
  const randomNum = Math.random();
  if(randomNum < 0.33){
    return {
      name: 'john'
    };
  } else if (randomNum < 0.66){
    return {
      name: 'john',
      dogName: 'rex'
    }
  } else {
    return {
      name: 'john',
      managePeople(){
        console.log('Managing people...');      
      },
      delegateTasks(){
        console.log('Delegating tasks...');      
      }
    }
  }
}

interface Persona{
  name: string;
}

interface DogsOwner extends Person {
  dogName: string;
}

interface Manage extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

const employed: Persona | DogsOwner | Manage = getEmployee();
console.log(employed);

//TYPE PREDICATE
function isManager(obj: Persona | DogsOwner | Manage): obj is Manage{
  return 'managePeople' in obj;
}

if(isManager(employed)){
  employed.delegateTasks();
}

//INTERFACE VS TYPE ALIAS

//TUPLES - array of fixed length or types
let persona: [string, number] = ['john', 25];
let date: readonly [number, number, number] = [12, 17, 2001];
//date.push(24);
console.log(date);

function getPerson(): [string, number]{
  return ['john', 25];
}

let randomPerson = getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);

let susana: [string, number?] = ['susana'];

//ENUMS - define set of name constants (with numbers - 0,1 (200, 500) is
//a default setting - reverse mapping is happening)
enum ServerResponseStatus {
  Success = 200,
  Error = 'Error'
}

interface ServerResponse{
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse{
  return {
    result: ServerResponseStatus.Success,
    data: ['first item', 'second item']
  }
}

const response: ServerResponse = getServerResponse();
console.log(response);

//challenge
enum UserRole {
  Admin, 
  Manager, 
  Employee
}

type Users = {
  id: number;
  name: string; 
  role: UserRole; 
  contact: [string, string]
}

function createUsers(user: Users): Users{
  return user;
}

const user: Users = createUsers({
  id: 1,
  name: 'lena',
  role: UserRole.Manager,
  contact: ['lena@gmail.com', '0605678900']
})

console.log(user);

//TYPE ASSERTION - handy with DOM elements, that we know more than TypeScript does
let someValue: any = 'this is a string';
let strLength: number = (someValue as string).length;

type Bird = {
  name: string
};

let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name);
console.log(dog.name);

enum Status{
  Pending = 'pending',
  Declined = 'declined'
}

type Customer = {
  name: string;
  status: Status;
}

// save Status.Pending in the DB as a string
// retrieve string from the DB

const statusValue = 'pending';
const customer: Customer = {
  name: 'john',
  status: statusValue as Status
}

//TYPE UNKNOWN
let unknownValue: unknown;

unknownValue = 'hello world';
unknownValue = [1,2,3];
unknownValue = 42.33455

//unknownValue.toFixed(2);

if(typeof unknownValue === 'number'){
  unknownValue.toFixed(2);
}

function runSomeCode(){
  const random = Math.random();
  if(random < 0.5){
    throw new Error('there was error...');
  } else {
    throw 'string';
  }
}

try{
  runSomeCode();
}catch(error){
  if(error instanceof Error){
    console.log(error.message);
  } else {
    console.log(error);
  }
}

//TYPE NEVER - type of value that never occur
//let someValues: never = 0;
type Theme = 'light' | 'dark';

function checkTheme(theme: Theme): void {
  if(theme === 'light'){
    console.log('light theme');
    return;
  }
  if(theme === 'dark'){
    console.log('dark theme');
    return;
  }
  theme;
}

enum Color {
  Red,
  Blue,
  Green
}

function getColorName(color: Color){
  switch(color){
    case Color.Red :
      return 'Red';
    case Color.Blue :
      return 'Blue';
    case Color.Green :
      return 'Green';
    default:
    //at build time
    let unexpectedColor: never = color;
    //at run time
      throw new Error(`Unexpected color value: ${color}`);
  }
}
console.log(getColorName(Color.Red));
console.log(getColorName(Color.Blue));
console.log(getColorName(Color.Green));

//MODULES - by default put in global scope (export/import - 1 approach, 'moduleDetection':"force" - 2 approach)
const andy = 'andy'; // if andy is also in another file
let something = 'something';

//TYPE GUARDING
type ValueType = string | number | boolean;

let value: ValueType;
const randoms = Math.random();
value = randoms < 0.33 ? 'Hello' : randoms < 0.66 ? 123.456 : true;

function checkValue(value: ValueType): void{
  if(typeof value === 'string'){
    console.log(value.toLowerCase());
    return;
  }
  if(typeof value === 'number'){
    console.log(value.toFixed(2));
    return;
  }
  console.log(`boolean: ${value}`);
}

checkValue(value);

//EQUALITY NARROWING
type Dog = { type: 'dog'; name: string; bark: () => void };
type Cat = { type: 'cat'; name: string; meow: () => void };
type Animal = Dog | Cat;

// function makeSound(animal: Animal){
//   if(animal.type === 'dog'){
//     animal.bark();
//   }else{
//     animal.meow();
//   }
// }

function makeSound(animal: Animal){
  if('bark' in animal){
    animal.bark();
  }else{
    animal.meow();
  }
}

//TRUTHY/FALSY VALUE GUARD
function printLength(str: string | null | undefined){
  if(str){
    console.log(str.length); 
  }else{
    console.log('no string provided');
  }
}

printLength('hello');
printLength('');
printLength(null);
//printLength();
printLength(undefined);

//INSTANCEOF TYPE GUARD
try{
  throw 'some error';
  //throw new Error('This is an error');
}catch(error){
  if(error instanceof Error){
    console.log(`Caught an Error object: ${error.message}`);
  }else{
    console.log('unknown error...');
  }
}

function checkInput(input: Date | string): string{
  if(input instanceof Date){
    return input.getFullYear().toString();
  }
  return input;
}

const year = checkInput(new Date());
const randomized = checkInput('2020-05-05');
console.log(year);
console.log(randomized);

//TYPE PREDICATE - function that returns true or false (is!)
type Student = {
  name: string;
  study: () => void;
};

type Renter = {
  name: string;
  login: () => void;
};

type Persons = Student | Renter;

const randomPersons = (): Persons => {
  return Math.random() > 0.5
    ? { name: 'john', study: () => console.log('Studying') }
    : { name: 'mary', login: () => console.log('Logging in') };
};

const persons = randomPersons();

function isStudent(persons: Persons):persons is Student{
  //return 'study' in persons;
  return (persons as Student).study !== undefined;
}

if(isStudent(persons)){
  persons.study();
}else{
  persons.login();
}

//DISCRIMINATED UNIONS
type IncrementAction = {
  type: 'increment';
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: 'decrement';
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action){
  switch(action.type){
    case 'increment':
      return state + action.amount;
    case 'decrement':
      return state - action.amount;
    default:
      const unexpectedAction: never = action;
      throw new Error(`Unexpected action: ${unexpectedAction}`);
  }
}

const newState = reducer(15, {
  user: 'john',
  type: 'increment',
  amount: 5,
  timestamp: 12345,
})

//GENERICS
// let array1: string[] = ['Apple', 'Banana', 'Mango'];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

let array1: Array<string> = ['Apple', 'Banana', 'Mango'];

// function createString(arg: string): string {
//   return arg;
// }
// function createNumber(arg: number): number {
//   return arg;
// }

function genericFunction<T>(arg: T): T{
  return arg;
}

const someStringValue = genericFunction<string>('Hello world!');
const someNumberValue = genericFunction<number>(2);

interface GenericInterface<T>{
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: 'Hello world',
  getValue(){
    return this.value;
  }
}

async function someFunc(): Promise<string> {
  return 'hello world';
}

const results = someFunc();

// createArray<string>(3, 'hello'); // ['hello', 'hello', 'hello']
// createArray<number>(4, 100); // [100, 100, 100, 100]

function generateStringArray(length: number, value: string): string[]{
  let result: string[] = [];
  result = Array(length).fill(value);
  return result;
}

//console.log(generateStringArray(6, 'hello'));

function createArray<T>(length: number, value: T): T[]{
  let result: T[] = [];
  result = Array(length).fill(value);
  return result;
}

let arrayStrings = createArray<string>(10, 'hello');
console.log(arrayStrings);

let arrayNums = createArray<number>(10, 100);
console.log(arrayNums);

function pair<T, U>(param1: T, param2: U): [T, U]{
  return [param1, param2];
}

let resulting = pair<number, string>(123, 'hello');

function processValue<T extends string | number>(value: T): T{
  console.log(value);
  return value;
}
processValue('hello');
processValue(12);
//processValue(true);

type Vehicle = {
  brand: string;
  model: string;
};

const vehicle: Vehicle = {
  brand: 'ford',
  model: 'mustang',
};

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: 'shoes',
  price: 1.99,
};

type Students = {
  name: string;
  age: number;
};

const student: Students = {
  name: 'peter',
  age: 20,
};

function printName<T extends {name: string}>(input: T): void {
  console.log(input.name);
}
printName(student);
printName(product);
//printName(vehicle);

interface StoreData<T = any>{
  data: T[];
}

const storeNumbers: StoreData<number> = {
  data: [1, 2, 3]
}

const randomStuff: StoreData = {
  data: ['random', 2]
}

//FETCH
import {z} from 'zod';

const url = 'https://www.course-api.com/react-tours-project';

const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
  something: z.number()
})

// type Tour = {
//   id: string;
//   name: string;
//   info: string;
//   image: string;
//   price: string;
// }

type Tour = z.infer<typeof tourSchema>;

export async function fetchData(url:string): Promise<Tour[]> {
  try{
    const response = await fetch(url);
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const rawData: Tour[] = await response.json();
    const result = tourSchema.array().safeParse(rawData);
    if(!result.success){
      throw new Error(`Invalid data: ${result.error}`);
    }
    return result.data;
  }catch(error){
    const errorMsg = error instanceof Error 
    ? error.message : 'there was an error';
    console.log(errorMsg);
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour) => {
  console.log(tour.name);
  console.log(tour.something);
})


