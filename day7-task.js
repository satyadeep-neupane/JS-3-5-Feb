const marks = [];
const fullMarks = 100;
const passMark = 32;

const markField = document.getElementById('mark');
const markList = document.getElementById('mark-list');

function addMarks()
{
    const mark = isValid(markField.value);

    if(mark)
       marks.push(mark)
    else
        alert('Please enter a valid mark');

    markField.value = '';
    markList.innerHTML = marks.map(item => `<b>${item}</b>`);
}

function getResult()
{
    if(marks.length === 0)
    {
        alert('Please enter marks');
        return;
    }

    document.getElementById('result').innerHTML = getPassStatus(marks);
    document.getElementById('percentage').innerHTML = getPercentage(getTotal(marks), fullMarks * marks.length);
}

function isValid(num)
{
    num = parseInt(num);

    if(isNaN(num))
        return false

    if(num < 0 || num > 100)
        return false
    
    if(marks.length >= 4)
        return false

    return num
}

function getPassStatus(nums)
{
    return nums.every(item => item >= passMark) ? 'Passed' : 'Failed';
}

function getTotal(nums)
{
    return nums.reduce((total, item) => total + item);
}

function getPercentage(obtained, total)
{
    return (obtained / total) * 100;
}