function dragStart(event){

    console.log(event.dataTransfer);

    event.dataTransfer.setData('text/plain', event.target.id)

    event.currentTarget.style.backgroundColor = 'gray'
}


function dragOver(event) {
    event.preventDefault();
}

function drop(event){
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;

    dropzone.appendChild(draggableElement);

    event.dataTransfer.clearData();
}

// window.addEventListener('DOMContentLoaded', () => {
    
//     const drag = document.querySelector('#drag-1');

//     drag.addEventListener('dragstart', dragStart);
// })

window.addEventListener('resize', function(){
    if( this.window.innerWidth < 420){

        console.log("smarthphone");
    } else if (this.window.innerWidth  < 720){

        console.log('tablet')
    } else {
        console.log('desktop')
    }
})