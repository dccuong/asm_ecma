import instance from "./instance";
export const getAll = () => {
    const url = "/posts";
    return instance.get(url);
}
export const getLimit = () => {
    const url = "/posts?_limit=8";
    return instance.get(url);
}
export const getDesc = () => {
    const url = "posts?_sort=price&_order=desc";
    return instance.get(url);
}
export const getAsc = () => {
    const url = "posts?_sort=price&_order=asc";
    return instance.get(url);
}
export const get = (id) => {
    const url = "/posts/" + id;
    return instance.get(url);
}
export const add = (post) => {
    const url = '/posts';
    return instance.post(url, post)
}
export const remove = (id) => {
    const url = `/posts/` + id;
    return instance.delete(url);
}
export const update = (post) => {
    const url = `/posts/` + post.id;
    return instance.put(url, post);
}
export const getCate = (id) => {
    const url = "/categorys/" + id + "?_embed=posts";
    return instance.get(url);
}
export const Search = (value) => {
    const url = "/posts?title_like=" + value;
    return instance.get(url);
}