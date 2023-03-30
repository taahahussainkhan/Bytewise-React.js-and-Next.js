
function setTimer(){
    const original_DOM=`
    <div>
        <h1>Javascript</h1>
        <input type="text" />
        <p>${new Date().toLocaleTimeString()}</p>
    </div>
    `;
    document.querySelector('.originalDOM').innerHTML=original_DOM;
}

const virtual_DOM = React.createElement(
    'div',
    null,
    React.createElement('h1',null,'React'),
    React.createElement('div',null,
    React.createElement('input',{'type':'text'})),
    React.createElement('p',null,new Date().toLocaleDateString()));

    ReactDOM.render(virtual_DOM,document.querySelector('.virtualDOM'));

setInterval(setTimer, 1000);
