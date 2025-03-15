
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const lbl = document.createElement('p');
const lielement = document.createElement('li');
const deletebtt = document.createElement('button');

lielement.textContent = input.value;

deletebtt.textContent = 'delete';

lielement.append(deletebtt);

list.append(lielement);

button.addEventListener('click', function () {

    if (input.value == '') {

        lielement.append(input.value);
        input.value = '';
        input.focus();
    }
    else {
        lbl.innerHTML = "Your must enter a chapiter befor validate";
    }
});

deletebtt.addEventListener('click', function () {
    list.removeChild(lielement);
    input.value = '';
    input.focus();
})