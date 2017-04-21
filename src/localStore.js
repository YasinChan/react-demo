/**
 * Created by yaoyao on 2017/4/21.
 */
export function save(key, value){
    return window.localStorage.setItem(key, JSON.stringify(value))
}

export function load(key){
    return JSON.parse(window.localStorage.getItem(key))
}