const socket = io()

const render = (data) => {
    const html = data.map((elem, index) => {
        return (`<div>
                    <strong class="text-primary">${elem.author}</strong><span style="color: #804000">[${elem.date}]</span>:
                    <em class="text-success font-italic">${elem.text}</em>
                </div>`)
    }).join(" ")
    document.querySelector('#messagesDiv').innerHTML = html
    document.getElementById('author').value = ""
    document.getElementById('text').value = ""
    document.getElementById('author').focus()
}   

const date = () => {
    const newDate = new Date()
    let dateA = newDate.getDate() + '/' + ( newDate.getMonth() + 1 ) + '/' + newDate.getFullYear();
    let dateB = newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds();
    return `${dateA} - ${dateB}`
}

const addMessage = (e) => {
    const message = {
        author: document.querySelector('#author').value,
        text: document.querySelector('#text').value,
        date: date()
    }

    socket.emit('new-message', message)
    return false
}



socket.on('messages', data => {
    render(data)
    
})