
function mad(){
    var nounInput = document.getElementById('noun');
    var verbInput = document.getElementById('verb');
    var verbingInput = document.getElementById('verb-ing');

    
    var nounBox = nounInput.value; 
    var verbBox = verbInput.value;
    var verbingBox = verbingInput.value;
    
    
    var madLib =  nounBox + ' is when he ' + verbBox + ' you a piece of your soul, that you never knew was ' + verbingBox;
    
    var madLibber = document.getElementById('mad libber');
    madLibber.textContent = madLib;

}


