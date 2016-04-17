const lsKey = 'browserReminderItems';

/**
 * Parses a string to object if needed
 */
export function parseResponse(data) {
    return data && typeof(data) === "object" ? data : JSON.parse(data);
}


export function sortResponse(data) {
    return data.sort(function(first, second) {
        return second.utcdate - first.utcdate;
    })
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
    window.localStorage.setItem('browserReminderItems', stringToSet);
    
    return items;
}