const getUserGitAsync = async (user) => {
    console.log('Inicio la petición');
    let url = 'https://api.github.com/users/' + user;
    const resp = await fetch(url);
    const datos = resp.json();
    console.log(datos);
    console.log('Termine la petición');
    return datos;
}

const getUserGitPromise = async (user) => {
    console.log('Inicio la petición');
    let url = 'https://api.github.com/users/' + user;
    return fetch(url)
    .then((response) => {
        const datos = response.json();
        console.log(datos);
        console.log('Termine la petición');
        return datos;
    })
    .catch((err) => {
        return err;
    });
}

const prom1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(3);
        }, 2000);
     });
}