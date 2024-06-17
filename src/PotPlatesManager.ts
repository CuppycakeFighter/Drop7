import * as pc from 'playcanvas'

class PotPlatesManager extends pc.ScriptType {
    totalTries : number = 10;
    remainingTries : number = 0;
    score: number = 0;
    plateMap : Map<pc.Vec2, pc.Entity>
    
    initialize() 
    {
        let thisEntity : pc.Entity = this.entity;
        let thisClass : PotPlatesManager = this;
        
    }
}

pc.registerScript(PotPlatesManager, 'PotPlatesManager');