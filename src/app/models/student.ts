export class Student {
    public Name = "";
    public Age = 0;
    public Hobbies: Array<string> = [];

    constructor(name:string, age:number, hobbies:Array<string>) {
      this.Name = name;
      this.Age = age;
      this.Hobbies = hobbies;
    }

  }