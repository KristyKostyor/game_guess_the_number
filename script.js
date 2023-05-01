const input=document.querySelector('#guess');
const button=document.querySelector('#btn');
const answer=Math.floor(Math.random()*20)+1;

input.addEventListener('keypress', function(e){
    if(e.keyCode===13){
        play();
    }
})

button.addEventListener('click', play);

function play(){
    const userNumber=document.querySelector('#guess').value;
    if(userNumber < 1 || userNumber > 20){
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Введите число от 1 до 20!',
        })
    }
        else if (isNaN(userNumber)) {
            Swal.fire({
                icon: 'error',
                title: 'Ой!',
                text: 'Нужно ввести число!',
        })
    }
    else if(userNumber < answer){
            Swal.fire('Попробуй  число повыше!',
                    'Компьютер пока побеждает!')
        }
    else if (userNumber > answer){
    Swal.fire('Попробуй  число пониже!',
            'Компьютер пока побеждает!')
}
    else{
        Swal.fire({
            title: 'Победа!',
            imageUrl: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFwcHklMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
            imageWidth:400,
            imageHeight: 500,
            imageAlt: 'Победа',
        })
}
    }
