let bannerButton = document.getElementById('banner');
let serch = document.getElementById('serch');
let iconClose = document.getElementById('iconClose');
let serchContainerItems = document.getElementById('serchContainerItems');
let serchContainer = document.getElementById('serchContainer');
let serchMessage = document.getElementById('serchMessage');
let work = document.getElementById('work');
let lerning = document.getElementById('lerning');
let leng = document.getElementById('leng');
let wraperContent = document.getElementById('wraperContent');



bannerButton.addEventListener('click', () => {

    serch.style.visibility = ('visible');
    document.body.classList.add('overflow')


})

iconClose.addEventListener('click', () => {
    serch.style.visibility = ('hidden');
    document.body.classList.remove('overflow')

})
serchContainerItems.addEventListener('click', () => {
    serchContainer.classList.add('opacity')
    serchMessage.style.visibility = ('visible');
    setTimeout(() => {
        serchContainer.classList.remove('opacity')
        serchMessage.style.visibility = ('hidden');
    }, 1000)
})


work.addEventListener('click', () => {
    wraperContent.style.opacity = ('0.8');
    serchMessage.style.visibility = ('visible');
    setTimeout(() => {
        wraperContent.style.opacity = ('1');
        serchMessage.style.visibility = ('hidden');
    }, 1000)
});

leng.addEventListener('click', () => {
    wraperContent.style.opacity = ('0.8');
    serchMessage.style.visibility = ('visible');
    setTimeout(() => {
        wraperContent.style.opacity = ('1');
        serchMessage.style.visibility = ('hidden');
    }, 1000)
});

lerning.addEventListener('click', () => {
    wraperContent.style.opacity = ('0.8');
    serchMessage.style.visibility = ('visible');
    setTimeout(() => {
        wraperContent.style.opacity = ('1');
        serchMessage.style.visibility = ('hidden');
    }, 1000)
});



