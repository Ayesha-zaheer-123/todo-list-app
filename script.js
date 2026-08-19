let total=2; 
        let completed=0; 
        let totalbtn=document.querySelector("#msg"); 
        let completedbtn=document.querySelector("#msg2"); 
        let pendingbtn=document.querySelector("#msg3"); 
        let pending=2; 
        let newbtn=document.querySelector(".new-btn"); 
        let tasklist=document.querySelector(".tasklist"); 
        newbtn.addEventListener("click",()=>{ 
            let text=prompt("enter your text"); 
            if(text) { 
              let div = document.createElement("div"); 
              let p=document.createElement("p"); 
              p.innerText=text; 
              div.setAttribute("class","task"); 
              div.append(p); 
 
    let completeBtn = document.createElement("button"); 
    completeBtn.innerText = "Mark as Completed"; 
    completeBtn.className = "complete-btn"; 
     
    let deleteBtn = document.createElement("button"); 
    deleteBtn.innerText = "delete task"; 
    deleteBtn.className = "delete-btn"; 
     
    // buttons ke liye wrapper div 
    let btnWrapper = document.createElement("div"); 
    btnWrapper.className = "task-buttons"; 
    btnWrapper.append(completeBtn); 
    btnWrapper.append(deleteBtn); 
     
    div.append(btnWrapper);  // wrapper ko bhi task div mein daalo 
     
    tasklist.append(div);    // poora naya task, tasklist mein add karo 
     
    total += 1; 
    pending += 1; 
    totalbtn.innerText=total; 
    pendingbtn.innerText=pending; 
  } 
        }); 
        tasklist.addEventListener("click",(event)=>{ 
if(event.target.classList.contains("complete-btn")) { 
   let btn=event.target; 
   let taskdiv=btn.parentElement.parentElement; 
   let p=taskdiv.querySelector("p"); 
   btn.style.backgroundColor="green"; 
   btn.innerText="Completed"; 
   btn.disabled=true; 
   p.style.textDecoration="line-through"; 
   if(pending>0) { 
 pending-=1; 
   }else{ 
    pending=0; 
   } 
    completed+=1; 
    pendingbtn.innerText=pending; 
completedbtn.innerText=completed; 
} if(event.target.classList.contains("delete-btn")) { 
    let btn=event.target; 
    let taskdiv=btn.parentElement.parentElement; 
     let completeBtnInTask = btn.parentElement.querySelector(".complete-btn"); 
     if(completeBtnInTask.innerText==="Completed") { 
        completed-=1; 
        completedbtn.innerText = completed;  
     }else { 
    pending -= 1; 
    pendingbtn.innerText = pending; 
  } 
   
  total -= 1; 
  totalbtn.innerText = total; 
   
  taskdiv.remove(); 
} 
        }); 