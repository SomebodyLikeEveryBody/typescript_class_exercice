class Person {
    protected _name: string;
    protected _age: number;

    public constructor(pName: string='Robert', pAge: number=32) {
        this._name = pName;
        this._age = pAge;
    }

    public set name (pName: string) {
        this._name = pName;
    }

    public get name () {
        return this._name;
    }

    public set age (pAge: number) {
        if (pAge > 0) {
            this._age = pAge;
        }
    }

    public get age () {
        return this._age;
    }

    public toString() {
        return ('Nom: ' + this._name + '\nAge: ' + this._age);
    }
}