module.exports = function toReadable (number) {
  let m = [];
  let n = (number+"").split('');
  if (number == 0){
      return 'zero';
  }
  if (n.length == 3) {
    switch(n[0]){
        case('1'): 
        m.push("one hundred");
        n.splice(0, 1);
        break;
        case('2'): 
        m.push("two hundred");
        n.splice(0, 1);
        break;
        case('3'): 
        m.push("three hundred");
        n.splice(0, 1);
        break;
        case('4'): 
        m.push("four hundred");
        n.splice(0, 1);
        break;
        case('5'): 
        m.push("five hundred");
        n.splice(0, 1);
        break;
        case('6'): 
        m.push("six hundred");
        n.splice(0, 1);
        break;
        case('7'): 
        m.push("seven hundred");
        n.splice(0, 1);
        break;
        case('8'): 
        m.push("eight hundred");
        n.splice(0, 1);
        break;
        case('9'): 
        m.push("nine hundred");
        n.splice(0, 1);
        break;
    }
  } 
  
  if (n.length == 2) {
    
    if (n[0] == 0){
        n.splice(0, 1);
      }

    let x = number%100;
    
    if (x < 20 && x > 9) {
        let y = n.join('');
        switch(y){
            case('10'): 
            m.push("ten");
            return(m.join(' '));
        case('11'): 
        m.push("eleven");
        return(m.join(' '));
        case('12'): 
        m.push("twelve");
        return(m.join(' '));
        case('13'): 
        m.push("thirteen");
        return(m.join(' '));
        case('14'): 
        m.push("fourteen");
        return(m.join(' '));
        case('15'): 
        m.push("fifteen");
        return(m.join(' '));
        case('16'): 
        m.push("sixteen");
        return(m.join(' '));
        case('17'): 
        m.push("seventeen");
        return(m.join(' '));
        case('18'): 
        m.push("eighteen");
        return(m.join(' '));
        case('19'): 
        m.push("nineteen");
        return(m.join(' '));
        }
    }
        if (x > 19) {

            switch(n[0]){
            case('2'): 
            m.push("twenty");
            n.splice(0, 1);
            break;
            case('3'): 
            m.push("thirty");
            n.splice(0, 1);
            break;
            case('4'): 
            m.push("forty");
            n.splice(0, 1);
            break;
            case('5'): 
            m.push("fifty");
            n.splice(0, 1);
            break;
            case('6'): 
            m.push("sixty");
            n.splice(0, 1);
            break;
            case('7'): 
            m.push("seventy");
            n.splice(0, 1);
            break;
            case('8'): 
            m.push("eighty");
            n.splice(0, 1);
            break;
            case('9'): 
            m.push("ninety");
            n.splice(0, 1);
            break;
            }
        }
        

  }
  

if (n.length == 1){
    switch(n[0]){
        case('1'): 
        m.push("one");
        n.splice(0, 1);
        break;
        case('2'): 
        m.push("two");
        n.splice(0, 1);
        break;
        case('3'): 
        m.push("three");
        n.splice(0, 1);
        break;
        case('4'): 
        m.push("four");
        n.splice(0, 1);
        break;
        case('5'): 
        m.push("five");
        n.splice(0, 1);
        break;
        case('6'): 
        m.push("six");
        n.splice(0, 1);
        break;
        case('7'): 
        m.push("seven");
        n.splice(0, 1);
        break;
        case('8'): 
        m.push("eight");
        n.splice(0, 1);
        break;
        case('9'): 
        m.push("nine");
        n.splice(0, 1);
        break;
    }
}
   
  
    
  return m.join(' ');

}
