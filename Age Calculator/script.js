const calculateBtn = document.querySelector(".calculate-btn");
const inputDate = document.querySelector(".input-area");
const resultBox = document.querySelector(".result");
calculateBtn.addEventListener("click",calculateAge);
 
function calculateAge(){
    let dob = new Date(inputDate.value);
    
    let d1 = dob.getDate();
    let m1 = dob.getMonth();
    let y1 = dob.getFullYear();

    let curr_date = new Date();
    let d2 = curr_date.getDate();
    let m2 = curr_date.getMonth();
    let y2 = curr_date.getFullYear();
    let d3,y3,m3;
    y3 = y2 - y1;

    if(m2>=m1){
        m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = 12 + m2 - m1;
    }
    
    if(d2>=d1){
        d3 = d2-d1;
    }
    else{
        m3--;
        d3 = getDaysInMonth(y1, m1)+ d2 - d1;
    }
    if(m3<0){
            m3=11;
            y3--;
        }
resultBox.innerHTML=`You are <span>${y3}</span> years, <span>${m3}</span> Months and <span>${d3}</span> days old.`
}
function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}
