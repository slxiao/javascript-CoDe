const getTodo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = true;
            if(!error)
                resolve({ text: 'Complete Code Example' })
            else
                reject()
        }, 2000)     
    })
}
getTodo()
    .then(todo => {
        console.log(todo.text)
    })
    .catch(error => {
        console.log("Error occurred")
    })
    
console.log("This is the first output")