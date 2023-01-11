/* eslint-disable @typescript-eslint/no-unused-vars */
import { XMLAttribute, XMLChild, XMLElement } from 'xml-decorators';

const HOBBY_NS = 'h';

export class Hobby {

  constructor(name: string, description: string){
    this.name = name;
    this.description = description;
  }

  @XMLAttribute({ namespace: HOBBY_NS })
  private name: string = "";

  @XMLAttribute({ namespace: HOBBY_NS })
  private description: string = "";
}

const PERSON_ROOT = 'person';
const PERSON_NS = 'ps';

@XMLElement({ root: PERSON_ROOT }) // optional
export class Person {

  constructor(firstname: string, lastname: string, age: number,hobbies:Hobby[], pets:string[]){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.hobbies = hobbies;
    this.pets = pets;
  }

  @XMLAttribute({ namespace: PERSON_NS })
  private firstname: string = "";

  private lastname: string = "";

  @XMLAttribute({ namespace: PERSON_NS })
  get fullname(): string {

    return this.firstname + ' ' + this.lastname;
  }

  @XMLAttribute({ namespace: PERSON_NS })
  private age: number = 0;

  @XMLChild({
    namespace: PERSON_NS,
    name: 'hobby'
  })
  private hobbies: Hobby[] = [];

  @XMLChild({
    namespace: PERSON_NS,
    stripPluralS: true
  })
  private friends: Person[] = [];

  @XMLChild({
    name: 'pet',
    implicitStructure: 'pets.$'
  })
  private pets: string[] = [];

}