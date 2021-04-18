function changeBackgroundColor(e) {
    e.target.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

function addButtons(e) {
    const buttonBox = document.createElement('button');
    buttonBox.innerText = 'Box';
    buttonBox.addEventListener('click', changeBackgroundColor);

    const buttons = document.createElement('span');
    buttons.className = 'buttons';
    buttons.append(buttonBox);
    createLabelArea(buttons);

    e.target.append(buttons);
}

function removeButtons(e) {
    const target = e.target;
    for (let i = 0; i < target.childNodes.length; i++) {
        if (target.childNodes[i].className === 'buttons') {
            target.removeChild(target.childNodes[i]);
            break;
        }
    }
}

function createLabelArea(target) {
    const label = document.createElement('label');
    label.innerText = 'Add';
    label.className = 'label';

    const labelArea = document.createElement('span');
    labelArea.className = 'label-area';
    labelArea.append(label);
    labelArea.addEventListener('mouseenter', addButtons);
    labelArea.addEventListener('mouseleave', removeButtons);

    target.append(labelArea);
}


document.addEventListener('DOMContentLoaded', () => {
    createLabelArea(document.body);
});
