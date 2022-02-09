import instance from "./instance";
export const getAll = () => {
    const url = "/post";
    return instance.get(url);
}

export const get = (id) => {
    const url = "/post/" + id;
    return instance.get(url);
}
export const add = (post) => {
    const url = '/post';
    return instance.post(url, post)
}