class Boxer extends Fighter {
    public constructor(pName?: string, pAge?: number) {
        super(pName, pAge);
        this._fightingStyle = 'boxing';
    }

    public giveCrochet() : string {
        return this.name + ' donne un superbe crochet du gauche ! Son style de ' + this.fightingStyle + ' est reconnaissable entre mille !';
    }
}