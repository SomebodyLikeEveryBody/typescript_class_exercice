class Fighter extends Person {
    protected _fightingStyle: string;

    public constructor(pName?:string, pAge?: number, pFightingStyle: string="chelou") {
        super(pName, pAge);
        this._fightingStyle = pFightingStyle;
    }

    public set fightingStyle (pFightingStyle: string) {
        this._fightingStyle = pFightingStyle;
    }

    public get fightingStyle () {
        return this._fightingStyle;
    }

    public hit() {
        return this.name + ' donne un coup en utilisant son style de ' + this.fightingStyle;
    }

    public toString() {
        return super.toString() + '\nStyle: ' + this.fightingStyle;
    }
}