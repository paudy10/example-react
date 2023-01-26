import config from '../config.json';

export function getblog() {
    return fetch(`${config.baseUrl}${config.api_blog}`);
}
export function getcart() {
    return fetch(`${config.baseUrl}${config.api_cart}`);
}
export function getapps() {
    return fetch(`${config.baseUrl}${config.api_getapps}`);
}
export function getapp(name) {
    return fetch(`${config.baseUrl}${config.api_getapp}${name}`);
}
export function getuserapp(name) {
    return fetch(`${config.baseUrl}${config.api_getuserapp}${name}`);
}
export function getprice() {
    return fetch(`${config.baseUrl}${config.api_price}`);
}
export function getusers() {
    return fetch(`${config.baseUrl}${config.api_getUsers}`);
}
export function getpm() {
    return fetch(`${config.baseUrl}${config.api_get_contact}`);
}
export function signup(data) {
    fetch(`${config.baseUrl}${config.api_signup}`, {
        method: 'POST',
        body: data
    });
}