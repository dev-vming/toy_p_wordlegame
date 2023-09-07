// 정답 
const answer = 'tiger';

// 제출 버튼을 누르면 채점 진행
const btn = document.querySelector('button');

const t1 = document.querySelectorAll('.t1');
const t2 = document.querySelectorAll('.t2');
const t3 = document.querySelectorAll('.t3');
const t4 = document.querySelectorAll('.t4');
const t5 = document.querySelectorAll('.t5');


const chances = [ t1, t2, t3, t4, t5 ];


btn.addEventListener('click', function(){

    chances.forEach((chance)=>{
        let counter = 0;
        for (let i=0; i<5; i++){
            if(chance[i].value == answer[i]){
                chance[i].style.backgroundColor = 'green';
                counter++;
                if(counter === 5){
                    alert('정답입니다!');
                } 
            } else if (chance[i].value == ''){
                chance[i].style.backgroundColor = 'white';
            } else if (answer.includes(chance[i].value)){
                chance[i].style.backgroundColor = 'yellow';
            } else  {
                chance[i].style.backgroundColor = 'lightgrey';
            } 
            
        } 
        
        
    })
    
})

