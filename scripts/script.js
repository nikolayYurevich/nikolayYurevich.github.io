let body = document.body;
let url = window.location.search;
let preloader = document.querySelector('.load');
let userName = 'NikolayYurevich';
if (url.indexOf('=') > 0)
{
    userName=url.split('=')[1];
}
console.log(preloader);
if (url !== '') {
    url = `https://api.github.com/users/${userName}`;
}
const getDate = new Promise((resolve, reject) => {
  setTimeout(() => new Date ? resolve(new Date) : reject(new Error('Время неизвестно')), 3000);
});
const getUser = fetch(url);

Promise.all([getUser, getDate])
  .then(([userData, nowDate]) => {
    data = userData;
    date = nowDate;
  })
    .then(res => data.json())
    .then(json => {
      preloader.style.display = 'none';

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

          let d = document.createElement('p');
          d.innerHTML = date;
          body.append(d);

          let img = document.createElement('img');
          img.src = json.avatar_url;
          body.appendChild(img);


        }
    })
    .catch(err => alert(err));
