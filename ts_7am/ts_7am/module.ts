interface IShow {
    ShowData(): void;
}
export class Person {
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

export function Sum(x: number, y: number) {
    return x + y;
}