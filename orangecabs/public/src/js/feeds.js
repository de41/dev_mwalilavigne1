var shareOrangeButton = document.querySelector('#share-orange-button');
var createCommentArea = document.querySelector('#create-post');
var closeCreateCommentModalButton = document.querySelector('#close-create-comment-modal-button');

function openCreateCommentModal() {
    createCommentArea.style.display = 'block';

    if(deferredPrompt){
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(function(choiceResult){
            console.log(choiceResult.outcome);
            if(choiceResult.outcome === 'dismissed') {
                console.log('User cancelled installation');
            }else{
                console.log('User added to home screen');
            }
        });

        deferredPrompt = null;
    }
}

function closeCreateCommentModal (){
    createCommentArea.style.display = 'none';
}

shareOrangeButton.addEventListener('click', openCreateCommentModal);
closeCreateCommentModalButton.addEventListener('click',closeCreateCommentModal);