interface IShow {
    ShowData(): void;
}
class Person {
    protected name: string;
}
export class Customer extends Person implements IShow {
    constructor(private id: number, name: string) {
        super();
        this.name = name;
    }
    ShowData(): void {
        console.log(`Id : ${this.id}, name:${this.name}`);
    }
}

//let c1: Customer = new Customer(1, 'Shailendra');
let I1: IShow = new Customer(1, 'Shailendra');
I1.ShowData();
