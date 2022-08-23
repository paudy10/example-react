import config from '../config.json';

export function getblog() {
    return fetch(`${config.baseUrl}${config.api_blog}`);
}
export function getprice() {
    return fetch(`${config.baseUrl}${config.api_price}`);
}
export function getusers() {
    return fetch(`${config.baseUrl}${config.api_getUsers}`);
}
export function signup(data) {
    fetch(`${config.baseUrl}${config.api_signup}`, {
        method: 'POST',
        body: data
    });
}