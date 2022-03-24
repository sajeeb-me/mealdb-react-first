const getStorageItem = () => {
    let storageItem = {};

    const getStorage = localStorage.getItem('name-list')
    if (getStorage) {
        storageItem = JSON.parse(getStorage)
    }
    return storageItem;
}

const addToLocalStorage = (meal) => {
    let storageItem = getStorageItem()

    const count = storageItem[meal];
    if (count) {
        storageItem[meal] = count + 1;
    }
    else {
        storageItem[meal] = 1;
    }

    localStorage.setItem('name-list', JSON.stringify(storageItem))
}
export {
    addToLocalStorage,
    getStorageItem
}