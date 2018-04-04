function Addition(x: number, y: number): number;
function Addition(x: number, y: string, z: string): string;
function Addition(x: number, y: any, z?: string): any {
    if (z == undefined) {
        return x + y;
    }
    else {
        return x + y + z;
    }
}

let result = Addition(1, 4);
console.log(result);