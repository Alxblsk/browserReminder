/**
 * Updates minutes length to 2 symbols
 */
function _timePreparation(data) {
    data.minute = data.minute + '';
    
    if (data.minute.length === 1) {
        data.minute += '0';
    }
    
    return data;
}

/**
 * Does all data preparations
 */
function _prepare(data) {
    return  _timePreparation(data);
}

/**
 * Returns a prepared template
 */
export default function getTemplate(data) {
    let response = _prepare(data);
    return `
        <div class="calendar-item">
            <div class="calendar-item-time">${response.hour}:${response.minute}</div>
            <p class="calendar-item-title">${response.body}</p>
        </div>
    `;
}