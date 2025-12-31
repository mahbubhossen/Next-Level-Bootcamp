// let anything: any;
// // anything = 222;
// anything = "Mahbub";
// (anything as string).


const KgToGmConverter = (input: string | number ): string | number | undefined  => {
    if(typeof input === "number"){
        return input * 1000;
    }else if(typeof input === "string"){
        const [value] = input.split(" ");
        return `Converted output is ${Number(value) * 1000} gm`;
    }
}

const result1 = KgToGmConverter(2) as number;
console.log({result1});
const result2 = KgToGmConverter("2 kg") as string;
console.log({result2});