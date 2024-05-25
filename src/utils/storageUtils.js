export function insertObjectToStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object))
}

export function getObjectFromStorage(key) {
    const data = localStorage.getItem(key)
    if (data)
        return JSON.parse(localStorage.getItem(key))
    else
        return {}
}