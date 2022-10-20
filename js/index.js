const notification = document.getElementsByClassName('box');
const madeAllRead = document.getElementById('selectall')
arr=[];
const addText = (x) => {
    const personChild = notification[x].getElementsByClassName('person')[0];
    const avatarChild = notification[x].getElementsByClassName('avatar')[0];
    personChild.insertAdjacentText("afterend", '🔴');
    avatarChild.style.cursor= 'pointer';
}
const removeClass = (x) =>{
    const haveClass = notification[x].getElementsByClassName('avatar')[0];
    haveClass.addEventListener('click',() => {
        notification?.[x]?.classList?.remove('unread');
        haveClass.style.cursor= 'auto';
    })
    madeAllRead.addEventListener('click',() => {
        notification?.[x]?.classList?.remove('unread');
        haveClass.style.cursor= 'auto';
    })
}
for (let index = 0; index < 3; index++) {

    const Random = Math.floor(Math.random() * notification.length);
        if(arr.includes(Random) == false){
            arr.push(Random)
            
        }else{
            arr.push(Random-1)
        }
        notification?.[arr[index]]?.classList?.add('unread');
        addText(arr[index])
        removeClass(arr[index])

}








