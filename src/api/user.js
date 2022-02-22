import instance from "./instance";

export const signin = (user) => {
    const url = '/signin';
    return instance.post(url, user);
};

export const signup = (user) => {
    const url = `/signup`;
    return instance.post(url, user);
}
export const getAllUser = () => {
    const url = `/users`;
    return instance.get(url);
}