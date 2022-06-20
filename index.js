function arrayInput(){
    let arr = []
    while(true){
        let value = prompt("Введите строку", '');
        if (value === "" || value === null) break ;
            arr.push(value);
    }
    return arr
        .map(
            (word) => word[0].toUpperCase() + word.slice(1))
        .sort(function compare (a, b) { 
            return a.length-b.length
        
        })
        
        
        
}

arrayInput();
    



