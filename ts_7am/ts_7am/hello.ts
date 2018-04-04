class program {
    public id: number;
    private name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    ShowData(): void {
        console.log(`Id : ${this.id}, name:${this.name}`);
    }
}

let p1 = new program(1, 'Shailendra');
p1.ShowData();
