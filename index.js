console.log('hello js')

const allBtn = document.getElementById('allIssueBtn')
const openBtn = document.getElementById('openBtn')
const closedBtn = document.getElementById('closedBtn')
const loadingSpinner = document.getElementById('Loading-spinner')
const cardContainer = document.getElementById('card-container')
const issuesModal = document.getElementById('issuesModal')
const issueCount = document.getElementById('issueCount')

// all issue load kore anar jonno 
const loadAllIssues = async ()=>{
showLoading()
  const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
  const data = await res.json();
  hideLoading()
  displayAllIssue(data.data)
}


const showLoading =()=>{
  loadingSpinner.classList.remove('hidden')
  cardContainer.innerHTML = ''
}

const hideLoading =()=>{
  loadingSpinner.classList.add('hidden')
}
// all issue display kore dekhanor jonno
const displayAllIssue=(issues)=>{
  // console.log(issues)
  issueCount.innerText = issues.length + " Issues";
const cardContainer = document.getElementById('card-container')
cardContainer.innerHTML = '';

issues.forEach ((issue)=>{
  // console.log(issue)
    const card = document.createElement('div')
    card.className = ` border-t-5 ${issue.status === 'closed' ?  'border-purple-500' : 'border-green-500'}`
    card.innerHTML =`
    <div id="${issue.id}" class="p-8 space-y-4 bg-white shadow-md h-[100%] rounded-xl" onclick="issueModalLoad(${issue.id})">      
      <div class="flex justify-between ">
            <img ${issue.status === 'closed' ? 'src="assets/Closed- Status .png"' : 'src="assets/Open-Status.png"'} alt="">
            <p class="bg-red-100 font-semibold text-red-400 px-10 py-2 rounded-full">${issue.priority}</p>
           </div>
           <div>
            <h1 class="title font-bold text-xl">${issue.title}</h1>
            <p class="font-semibold text-gray-400">${issue.description}</p>
           </div>

           <div class="mt-4 flex flex-wrap">
            <span class="bg-yellow-100 font-semibold text-red-400 px-8 py-2 rounded-full">${issue.labels}</span>
            
           </div>
         <div>
          <p class="font-semibold text-gray-400">${issue.author}</p>
          <p class="font-semibold text-gray-400">${issue.createdAt}</p>
         </div>

          </div>
    
    `
   cardContainer.appendChild(card);
})
}
// togglebtn
const toggleBtn=(id)=>{
  if(id =='allIssueBtn'){
    allBtn.classList.add('btn-primary')
    allBtn.classList.remove('btn-outline')
    openBtn.classList.add('btn-outline');
    closedBtn.classList.add('btn-outline')
    loadAllIssues();
  } 
  else if(id == 'openBtn'){
    openBtn.classList.remove('btn-outline')
    openBtn.classList.add('btn-primary')
  allBtn.classList.add('btn-outline')
  closedBtn.classList.add('btn-outline')
  openStatusLoad();
  }
  else if(id == 'closedBtn'){
    closedBtn.classList.remove('btn-outline')
    closedBtn.classList.add('btn-primary')
  allBtn.classList.add('btn-outline')
  openBtn.classList.add('btn-outline')
  closeDataLoad();
  }
}

// status open card loading
const openStatusLoad = async ()=>{
  showLoading()
  const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
  const statuses = await res.json();
  hideLoading()
  openCardDisplay(statuses.data);
}


// display open issues
const openCardDisplay =(allData)=>{

  const openData = allData.filter(item=> item.status == 'open');
  // console.log(openData)

   issueCount.innerText = openData.length + " Open Issues";
  const cardContainer = document.getElementById('card-container')
  cardContainer.innerHTML = '';
   openData.forEach((open)=> {
     
    const openCard = document.createElement('div')
    openCard.className = ` border-t-5 ${open.status === 'closed' ?  'border-purple-500' : 'border-green-500'}`;

    openCard.innerHTML = `
    
    <div id="${open.id}" class="p-8 space-y-4 bg-white shadow-md h-[100%] rounded-xl" onclick="issueModalLoad(${open.id})">      
      <div class="flex justify-between ">
            <img ${open.status === 'closed' ? 'src="assets/Closed- Status .png"' : 'src="assets/Open-Status.png"'} alt="">
            <p class="bg-red-100 font-semibold text-red-400 px-10 py-2 rounded-full">${open.priority}</p>
           </div>
           <div>
            <h1 class="title font-bold text-xl">${open.title}</h1>
            <p class="font-semibold text-gray-400">${open.description}</p>
           </div>

           <div class="mt-4 flex flex-wrap">
            <span class="bg-yellow-100 font-semibold text-red-400 px-8 py-2 rounded-full">${open.labels}</span>
            
           </div>
         <div>
          <p class="font-semibold text-gray-400">${open.author}</p>
          <p class="font-semibold text-gray-400">${open.createdAt}</p>
         </div>

          </div>
    
    `
    cardContainer.appendChild(openCard);
   })
  
}


// status closed
const closeDataLoad = async()=>{
  showLoading()
   const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
   const Closes = await res.json();
   hideLoading()
   displayClosedData(Closes.data)
}
// get closed data and display closed data
const displayClosedData =(allData)=>{
const closedData = allData.filter(item => item.status == 'closed');
// console.log(closedData)
issueCount.innerText = closedData.length + " Closed Issues";
const cardContainer = document.getElementById('card-container');
 cardContainer.innerHTML ='';
 closedData.forEach((closed)=>{
  // console.log(closed)
  const closedCard = document.createElement('div')
  closedCard.className = ` border-t-5 ${closed.status === 'closed' ?  'border-purple-500' : 'border-green-500'}`;
  closedCard.innerHTML =`
  
   <div id="${closed.id}" class="p-8 space-y-4 bg-white shadow-md h-[100%] rounded-xl" onclick="issueModalLoad(${closed.id})">      
      <div class="flex justify-between ">
            <img ${closed.status === 'closed' ? 'src="assets/Closed- Status .png"' : 'src="assets/Open-Status.png"'} alt="">
            <p class="bg-red-100 font-semibold text-red-400 px-10 py-2 rounded-full">${closed.priority}</p>
           </div>
           <div>
            <h1 class="title font-bold text-xl">${closed.title}</h1>
            <p class="font-semibold text-gray-400">${closed.description}</p>
           </div>

           <div class="mt-4 flex flex-wrap">
            <span class="bg-yellow-100 font-semibold text-red-400 px-8 py-2 rounded-full">${closed.labels}</span>
            
           </div>
         <div>
          <p class="font-semibold text-gray-400">${closed.author}</p>
          <p class="font-semibold text-gray-400">${closed.createdAt}</p>
         </div>

          </div>
  
  `
  cardContainer.appendChild(closedCard);
 })
}
// show modal related
const issueModalLoad = async(issueId)=>{
  const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${issueId}`);
  const modalsData = await res.json();
  displayModal(modalsData.data)
  issuesModal.showModal();
  
}

// const displayModal =(modals)=>{
  
  const displayModal = (issue)=>{

  document.getElementById("modalTitle").innerText = issue.title;

  document.getElementById("status").innerText = issue.status;

  document.getElementById("data").innerText = "Opened by " + issue.author;

  document.getElementById("date").innerText = new Date(issue.createdAt).toLocaleDateString();

  document.getElementById("description").innerText = issue.description;

  document.getElementById("assine").innerHTML =
  `assignee: <span class="font-bold text-xl">${issue.assignee}</span>`;

  document.getElementById("priority").innerHTML =
  `Priority: <span class="bg-red-400 rounded-full text-white py-1 px-2">${issue.priority}</span>`;

  const labels = issue.labels;

  document.getElementById("bug").innerText = labels[0] || "";
  document.getElementById("helpWanted").innerText = labels[1] || "";

}

 
// }


closeDataLoad();

openStatusLoad()

loadAllIssues();


document.getElementById('searchBtn').addEventListener('click', ()=>{
  const input = document.getElementById('input-search');
  const searchValue = input.value.trim().toLowerCase();
  showLoading();
  console.log(searchValue);
  fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`)
  .then(res=> res.json())
  .then((data)=>{
    hideLoading();
    const allIssues = data.data;
    console.log(allIssues)
  
   
    displayAllIssue(allIssues)
  })
    
})

