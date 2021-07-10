class Karateka extends Fighter {
    public constructor(pName?: string, pAge?: number) {
        super(pName, pAge);
        this._fightingStyle = 'karatay';
    }

    public giveMawashi() {
        return this.name + ' donne un superbe Mawashigueri des familles de son majestueux pied gauche ! Son style de ' + this.fightingStyle + ' est absolument saisissant !';
    }
}