const lsKey = 'browserReminderItems';

/**
 * Parses a string to object if needed
 */
export function parseResponse(data) {
    return data && typeof(data) === "object" ? data : JSON.parse(data);
}


/**
 * Returns an onject from LocalStorage
 */
export function getFromLocalstorage() {
    let rawItems = window.localStorage.getItem(lsKey);
    return rawItems ? JSON.parse(rawItems) : [];
}

/**
 * Sets an object as a string to LocalStorage
 */
export function setToLocalstorage(item) {
    let items = getFromLocalstorage();
    
    items.push(item);
    
    let stringToSet = JSON.stringify(items);    
    return window.localStorage.setItem('browserReminderItems', stringToSet);
}