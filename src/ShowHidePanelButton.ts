import * as pc from 'playcanvas'

class ShowHidePanelButton extends pc.ScriptType {
    bShow : boolean = false;
    text: string;
    entityLink : pc.Entity | null;
    
    initialize() 
    {
        let thisEntity : pc.Entity = this.entity;
        let thisClass : ShowHidePanelButton = this;
        if(thisEntity && thisEntity.button)
        {
            thisEntity.button.on('click', function(event) 
            {
                if(thisClass.entityLink)
                {
                    (thisClass as ShowHidePanelButton).bShow = !thisClass.bShow;
                    thisClass.entityLink.enabled = thisClass.bShow;
                }
            }, this);
                
        }
    }
}

pc.registerScript(ShowHidePanelButton, 'ShowHidePanelButton');
ShowHidePanelButton.attributes.add('entityLink', {type : 'entity'});