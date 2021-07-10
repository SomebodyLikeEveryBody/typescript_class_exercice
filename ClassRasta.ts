class Rasta extends Person {
    public constructor(pName?: string, pAge?: number) {
        super(pName, pAge);
    }

    public givePeace() {
        return this.name + ' donne la paix du haut de ses ' + this.age + ' ans. Amour.';
    }
}