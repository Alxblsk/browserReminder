function _timePreparation(data) {
    data.minute = data.minute + '';
    
    if (data.minute.length === 1) {
        data.minute += '0';
    }
    
    return data;
}

function _prepare(data) {
    return  _timePreparation(data);
}

export default function getTemplate(data) {
    let response = _prepare(data);
    return `
<div class="calendar-item">
    <div class="calendar-item-time">${response.hour}:${response.minute}</div>
    <p class="calendar-item-title">${response.body}</p>
</div>
`;
}