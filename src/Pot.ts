import * as pc from 'playcanvas'

export class Pot extends pc.ScriptType {
    number : number = 0;
    remainingCracks : number = 0;
    
    
    initialize() 
    {
        let thisEntity : pc.Entity = this.entity;
        let thisClass : Pot = this;
        
    }

    setPot(number : number)
    {
    }
}

pc.registerScript(Pot, 'Pot');