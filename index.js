// const count = 0

// try {
// function increaseCounter(counter){
//     counter = counter + 1
//     increaseCounter(counter)
//     return counter
// }
// } catch(err){
//     console.error(err)
//     console.log(err , counter)
// }

// increaseCounter(count)

function flatten(array){
    array.flat()
    return flatten(array)
}

const trampoline = (f, ...arrays) => {
    let result = f(...arrays)
    while (typeof result === "function"){
        result = result()
    }
    return result
}
const body = document.getElementById("textBox")
const paragraph = document.createElement("p")
body.appendChild(paragraph)

function primeNums(end){
    const primes = new Array(end + 1).fill(true); 
    primes[0] = primes[1] = false; 
  
    for (let i = 2; i * i <= end; i++) { 
        if (primes[i]) { 
            for (let j = i * i; j <= end; j += i) { 
                primes[j] = false; 
            } 
        } 
    } 
  
    for (let i = Math.max(2, 0); i <= end; i++) { 
        if (primes[i]) console.log(i); 
    } 

    const text = document.createTextNode(primes)
    paragraph.appendChild(text)
    alert("Calculation all done! :)")
} 

primeNums(10000)