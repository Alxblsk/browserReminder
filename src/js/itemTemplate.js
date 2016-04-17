const TIME_PERIOD = {
    PAST: 'past',
    CURRENT: 'current',    
    FUTURE: 'future'
}

/**
 * @param {number} utc Action timestamp
 */
function detectTimePeriod(utc) {
    let now = Date.now();  
    return now < utc ? TIME_PERIOD.FUTURE : TIME_PERIOD.PAST;
}

/**
 * Returns a prepared template
 */
export default function getTemplate(response) {
    response.period = detectTimePeriod(+response.utcdate) || TIME_PERIOD.FUTURE;
    
    return `
        <div class="calendar-item ${response.period ? 'calendar-item-' + response.period : ''}">
            <div class="calendar-item-time">
                ${response.day}/${response.month}/${response.year}
                ${response.hour}:${(response.minute.length === 1 ? '0' : '') + response.minute}
            </div>
            <p class="calendar-item-title">${response.body}</p>
        </div>
    `;
}