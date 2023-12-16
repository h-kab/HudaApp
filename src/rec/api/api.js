const domain = "https://hudaserver.onrender.com"

export const getAllUsers = async () => {
    const route = '/';
    return await appFetch(route, 'GET', null);

};
export const loginUser = async (email, password) => {
    const route = "/Login"
    console.log("mail,password", email, "login");
    const body = {
        email: email,
        password: password
    }

    return await appFetch(route, "POST", body)

}


const appFetch = async (route, method, body, headers) => {
    const url = domain + route;
    console.log("body", body);



    const params = {
        method: method || 'GET',
    };
    if (body) {
        params.body = JSON.stringify(body);
    }
    if (headers) {
        params.headers = headers;
    } else {
        params.headers = { 'Content-Type': 'application/json' };

    }
    return await fetch(url, params)
        .then(res => res.json())
        .then(resJson => resJson)
        .catch(e => console.log('fetch error:', e))
};
