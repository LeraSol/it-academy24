export class ObjectManipulator {

    constructor(protected obj: object) {}

    public set(key:string, value:string): object {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key:string): object{
        return this.obj[key];
    }

    public delete(key:string): object {
        const newObj: object = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): object {
        return this.obj;
    }
}

const admin= {name: 'Valeria', lastName: 'Petrova', age: 23};
const manipulator = new ObjectManipulator(admin);
console.log(manipulator.get("age"))