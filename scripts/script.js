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

        let avatar = document.createElement('div');
        avatar.className='avatar';

        let img = document.createElement('img');
        img.src = json.avatar_url;
        avatar.appendChild(img);
        body.append(avatar);
    })
    .catch(err => alert('Информация о пользователе недоступна'));
