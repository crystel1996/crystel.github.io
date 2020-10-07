/* eslint-disable */
/**
 * Permettre d'afficher le block pendant le scroll
 * S'il est déjà afficher, on n'execute plus l'animation
 * @param {*} ref 
 */
const showAnimationOpacity = (item,elementPos) => {
    const offset = 50;
    
    if(window.scrollY >= (elementPos - window.innerHeight + offset) && item.dataset.animating == "false"){
        item.className += " animate-opacity";
        item.dataset.animating = "true";
        setTimeout(() => {
            item.style.opacity = 1;
        },2000);
    }
    if(item.id == 'user-profile'){
        if(window.scrollY == 0){
            item.dataset.animating = "false";
            item.style.display = "none";
        } else {
            item.style.display = "block";
        }
    }
}

/**
 * Permettre de faire une animation translation d'une block  pendant le scroll en utilisant l'animation animate-transform-rect ...
 * @param {*} ref 
 */
const transformRect = (element,parent) => {
    
    if(window.scrollY >= (parent.offsetTop - window.innerHeight + 100) && element.dataset.transform == 'false'){
        if(element.dataset.translate == 'left'){
            element.className += ' animate-transform-rect-left';
        }
        if(element.dataset.translate == 'right'){
            element.className += ' animate-transform-rect-right';
        }
        element.dataset.transform = 'true';
    }
}

/**
 * Permettre de modifier une texte si sa longueur est supérieur à 150
 * @param {*} element 
 */
const ellipsis = (element) => {        
    
    if(element.length > 150){
        element = element.substring(0,150) + '...';
    }
    
    return element;
}

/**
 * Permettre d'afficher la progression des skills
 *  
 */
const progressSkill = (element,offset,parent,width,initWidth) => {
    if(window.scrollY >= (parent.offsetTop - window.innerHeight + offset) && element.dataset.sliding == 'false'){
        element.dataset.sliding = 'true';
        let interval = setInterval(() => {
            if(initWidth >= width){
                clearInterval(interval);
            } else {
                initWidth++;
                element.style.width = initWidth + '%';
            }
        },10);
    }
} 

export {ellipsis,progressSkill,transformRect,showAnimationOpacity};