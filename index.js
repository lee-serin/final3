function ready(){
    var checkbox = document.querySelectorAll("input[type=checkbox]");
    console.log(checkbox)
    checkbox.forEach(element => {

        
        element.addEventListener( 'change', function() {
            if(this.checked) {
                console.log(this.value)
                let elem = document.createElement('li');
                elem.innerHTML = this.value;
                elem.onclick = function() {
                    this.style.textDecoration = 'line-through'
                }
                list.append(elem);     
            } else {
                
            }
        
        });
    });
    
};

document.addEventListener("DOMContentLoaded", ready);