let body = document.body;
let url = window.location.search;
let userName =url.split('=')[1];
console.log(url);
console.log(userName);
//userName = 'NikolayYurevich';
if (url !== '') {
    url = `https://api.github.com/users/${userName}`;
}

fetch(url)
    .then(res => res.json())
    .then(json => {
      if (json.message == 'Not Found')
      {
          let text = document.createElement('p');
          text.className= 'word';
          text.innerHTML = 'Пользователь ' + userName + ' не найден';
          body.appendChild(text);
       }
       else
       {
          let nameUser = document.createElement('a');
          nameUser.className = 'button';
          nameUser.href = json.html_url;
          nameUser.innerHTML = json.name;
          body.appendChild(nameUser);

          let bio = document.createElement('p');
          bio.innerHTML = json.bio;
          body.appendChild(bio);

          let text = document.createElement('p');
          text.className= 'mentor';
          text.innerHTML = "Ментор молодец ;)";
          body.appendChild(text);

          let img = document.createElement('img');
          img.src = json.avatar_url;
          body.appendChild(img);
        }
    })
    .catch(err => alert(err));
