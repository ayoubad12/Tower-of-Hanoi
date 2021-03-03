function towerHanoi(discs) {
	var Current = 1 ;  // the variable "Current" is the number of transitions needed to move 1 disc to the goal (axiom, its the base of my algorithm)
	var Precedent;
	
	if (discs==0){return 0}     //if there is no disc, no transition needed
	if (discs==1){return 1}     //if there is one disc, you need one transition (axiom)
	if (discs>1){               //for more than 1 disc 
			for (i=2; i<=discs; i++){
				Precedent = Current ;
				Current = 2*Precedent+1 ;
			}
		return Current ;
	}
}