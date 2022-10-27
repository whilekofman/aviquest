
const getCookie = cookieName => {
    const cookies = document.cookie.split(';');
    
    for (let cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name.trim() === cookieName) return value;
    }
    return null;
}

const jwtFetch = async (url, options = {}) => {
    options.method = options.method || 'GET';

    options.headers = options.headers || {};
    options.headers["Authorization"] = 
        `Bearer ${localStorage.getItem('jwtToken')}`

    if (options.method.toUpperCase() !== 'GET'){
        options.headers['Content-Type'] = 
            options.headers['Content-Type'] || 'application/json';
        options.headers['CSRF-TOKEN'] = getCookie('CSRF-TOKEN');
    }
    const res = await fetch(url, options);

    if (res.status >= 400) throw res;

    return res;
}



export default jwtFetch;