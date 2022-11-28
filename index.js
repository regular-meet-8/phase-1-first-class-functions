function mornroutine(){

    console.log(`run 5 miles.`)
}
    
    function recievesAFunction(dailyActivity){
        mornroutine();
        dailyActivity();

}
function returnsANamedFunction(){
    mornroutine();
}
function returnsAnAnonymousFunction(){
   return recievesAFunction(() => console.log(`push-ups`))
}