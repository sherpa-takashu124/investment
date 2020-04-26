const searchbar = document.getElementById('search_text');
const label = document.getElementById('label')
const indicator = document.getElementById('indicator');
const answer = document.getElementById('answer')
const faqQues = document.getElementById('question_answer_div')
const ques = document.getElementById('ques')
let toogle = false;



searchbar.addEventListener('focusin', () => {
    console.log('on focus')
    label.classList.add('active');

    // $(this).parent().find('label').addClass('active');
})

searchbar.addEventListener('focusout', () => {
    console.log('inside out of focus')
    if (!searchbar.value.trim()) {
        label.classList.remove('active')
        console.log('remove');

    } else {

    }
})


// function toogleClose() {
//     if (toogle === false) {
//         faqQues.classList.remove('show')
//     }
// }




function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}
question.onclick = () => {

    var target = getEventTarget(event);

    switch (target.className) {

        case 'ques':
            if (target.parentNode.className === 'question_answer_div show') {
                target.parentNode.classList.remove('show')
            } else {
                console.log('hello' + target.parentNode.className)
                target.parentNode.classList.add('show')
            }

            break;

        case 'fa fa-angle-down':
            if (target.parentNode.className === 'question_answer_div show') {
                target.parentNode.classList.remove('show')
            } else {
                console.log('hello' + target.parentNode.className)
                target.parentNode.classList.add('show')
            }
            break;

        case 'question_answer_div':

            console.log('hello' + target.className)
            target.classList.add('show')

            break;

        case 'question_answer_div show':
            target.classList.remove('show')

            break;

        case 'answer':
            target.parentNode.classList.remove('show')
            break;






    }




}