
const baseUrl = "http://localhost:5000/"
const fetchUser = () => {
    const url = `${baseUrl}showUsers`;
    fetch(url)
        .then(function (r) {
            console.log(r)
            return r.json();
        })
        .then(function (res) {
            displayUsers(res)
        })
        .catch(function (err) {
            console.log(err)
        })
}



function displayUsers(res) {
    const tBody = document.getElementById('userList');
    let htmlData = "";


    for (i = 0; i < res.length; i++) {
        htmlData += `<tr>`
      htmlData += `<td> ${res[i].username}</td>`;
      htmlData += `<td> ${res[i].fullname}</td>`;
      htmlData += `<td> ${res[i].contact}</td>`;
      htmlData += `<td> ${res[i].email}</td>`;
      htmlData += `</tr>`
    }


    tBody.innerHTML = htmlData;


}

const send = document.getElementById('send')
send.addEventListener('click', sendData)



function sendDatas(){
    const fm = document.getElementById('userform')
let formData = new FormData(fm);

    // formData.append('fullname',fileInput);
    // formData.append('username','est001')
    // formData.append('contact','1234564')
    // formData.append('email','esther@gmail.com')
    // for (let pair of formData.entries()) {
    //     console.log(pair[0] + ', ' + pair[1]);
    // }
const url = `${baseUrl}register`;

const requestOptions = {
    method: 'POST',
    body: formData,
    // You can also include headers or other options here if needed
}
fetch(url,
   requestOptions
    )
.then(function(response){
    return response.json();
}).then(function(data){
    console.log(data)
})
.catch(err=>{
    console.log(err)
})
}
const userData = {
    fullname: 'Esther',
    username: 'est001',
    contact: '1234564',
    email: 'esther@gmail.com'
};
function sendData() {
    const fm = document.getElementById('userform');
    let formData = new FormData(fm);

    axios.post(`${baseUrl}register`, userData)
        .then(function(response) {
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
}

fetchUser();
