import * as pc from 'playcanvas'
import { Pot } from "./Pot"; 

class PotPlate extends pc.ScriptType {
    number : number = 0;
    remainingCracks : number = 0;
    pot : Pot;
    
    initialize() 
    {
        var thisEntity : pc.Entity = this.entity;
        var thisClass : PotPlate = this;
        
    }

    crack()
    {
        this.remainingCracks--;
        if(this.remainingCracks >0)
        {
            this.pot.setPot(-this.remainingCracks);
        }
        else
        {
            this.pot.setPot(-this.remainingCracks);
        }
        
    }

    spawnPot(numberCracks : number)
    {
        this.remainingCracks = numberCracks;
        this.number = Math.floor(Math.random() * 7);
        let dummyPot  =this.app.root.findByName("dummyPot");
        
       if(dummyPot)
        {
            this.pot =  new Pot();
            this.entity.addChild(this.pot.entity);
        this.pot.entity.rigidbody.teleport(this.entity.getPosition());
        }
        
    }
}

pc.registerScript(PotPlate, 'PotPlate');