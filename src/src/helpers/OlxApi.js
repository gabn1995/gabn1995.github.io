import Cookies from "js-cookie";
import qs from 'qs';

//  const BASEAPI = 'http://alunos.b7web.com.br:501';
const BASEAPI = 'https://xlo.gabrielbn.com/api';

// const credenciais = {
//     email: 'suporte@b7web.com.br',
//     password: '12345'
// }

const apiFetchFile = async (endpoint, body) =>{
    let token = '';
    if(!body.token){
        token = Cookies.get('token');

        if(token){
            body.append('token', token);
        }
    }
    
    console.log(token);
    const res = await fetch(BASEAPI+endpoint, {
        method:'POST',
        headers:{
            'Authorization': `Bearer ${token}`,
        },
        body
    });

    const json = await res.json();

    if(json.notallowed){
        window.location.href = '/signin';
        return;
    }

    return json;
}

const apiFetchPost = async (endpoint, body) =>{
    if(!body.token){
        let token = Cookies.get('token');

        if(token){
            body.token = token;
        }
    }

    const res = await fetch(BASEAPI+endpoint, {
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const json = await res.json();

    if(json.notallowed){
        window.location.href = '/signin';
        return;
    }

    return json;
}

const apiFetchGet = async (endpoint, body = []) =>{
    if(!body.token){
        let token = Cookies.get('token');

        if(token){
            body.token = token;
        }
    }

    const res = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    const json = await res.json();

    if(json.notallowed){
        window.location.href = '/signin';
        return;
    }

    return json;
}

const OlxApi = {

    login: async (email, password) =>{
        const json = await apiFetchPost(
            '/user/signin',
            {email, password}   
        );

        return json;
    },

    register: async (name, email, password, stateLoc) =>{
        const json = await apiFetchPost(
            '/user/signup',
            {name, email, password, state:stateLoc}    
        );
        console.log(json);
        return json;
    },
};

export default () => OlxApi;