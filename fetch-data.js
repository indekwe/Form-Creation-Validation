const fetchUserData= async function (){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'
        const dataContainer=document.getElementById('api-data')
    try {
        const response= await fetch(apiUrl)
        const users= await response.json()
        dataContainer.innerHTML=''
        const userList= document.createElement('ul')
        users.forEach(element => {
            userList.parentElement( element.createElement('li').textContent=users.name)           
        });
        dataContainer.appendChild(userList)
    }
    catch(error){
        dataContainer.innerHTML=''
        dataContainer.textContent='Failed to load user data.'
    }
}
document.addEventListener('DOMContentLoaded', fetchUserData())