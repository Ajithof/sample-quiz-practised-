//create an array of json data
const quizdata=[
    {
    question:"Which language runs in a web browser?",
    a:"java",
    b:"python",
    c:"C",
    d:"javascript",
    correct:"d",
    },
    { 
    question:"What does CSS stand for?",
        a:"Central Style Sheets",
        b:"Cascading Style Sheets",
        c:" Cascading Simple Sheets",
        d:"Cars SUVs Sailboats",
        correct:"b",  
    },{ 
        question:"What does CSS stand for?",
            a:"Central Style Sheets",
            b:"Cascading Style Sheets",
            c:" Cascading Simple Sheets",
            d:"Cars SUVs Sailboats",
            correct:"b",  
        }];
    
    const quiz=document.getElementById('quiz');
    const answerls=document.querySelectorAll('.answers');
    console.log(answerls);
    const questionls=document.getElementById('question');
    const a_text=document.getElementById('a_text');
    const b_text=document.getElementById('b_text');
    const c_text=document.getElementById('c_text');
    const d_text=document.getElementById('d_text');
    const submitbtn=document.getElementById('submit');
    
    let currentquiz=0;
    let score=0;
    
    loaddata();
    
    function loaddata(){
    
        deselect();
       
        const  currentquizdata=quizdata[currentquiz];
        console.log(currentquizdata);
        questionls.innerText=currentquizdata.question;
        a_text.innerText=currentquizdata.a;
        b_text.innerText=currentquizdata.b;
        c_text.innerText=currentquizdata.c;
        d_text.innerText=currentquizdata.d;
    
    
    }
    
    function deselect(){
        answerls.forEach(ansls=>ansls.checked=false);
    }
    
    
    function getselect(){
        let answer;
        answerls.forEach(item=>{
            if(item.checked){
                answer=item.id;
                console.log(answer);
            }
        })
    return answer;
    }
    submitbtn.addEventListener('click',()=>{
        const answer=getselect();
        if(answer){
            if(answer===quizdata[currentquiz].correct){
                score++;
            }
            currentquiz++;
    
            if(currentquiz<quizdata.length){
                loaddata();
            }
            else{
                quiz.innerHTML=`<h2> you have got ${score}/${quizdata.length} questions correctly </h2>`
            }
        }
    })