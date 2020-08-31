// console.clear();
let otherImg = document.querySelectorAll('.color-trans-img');
let otherImgContainer = document.querySelectorAll('#other-main-events-container > div');

for(let i=1;i<otherImgContainer.length;i++){
    otherImgContainer[i].addEventListener('mouseover',function(e){
        let childs = otherImgContainer[i].children;
        for(let j=0;j<4;j++){
            if(e.target==childs[j]){
                try{
                    otherImg[i-1].classList.remove('color-trans-effect');
                    otherImg[i-1].classList.add('color-trans-effect-add');
                }
                catch(e){

                }
            }
        }
    });

    otherImgContainer[i].addEventListener('mouseout',function(e){
        let childs = otherImgContainer[i].children;
        for(let j=0;j<4;j++){
            if(e.target==childs[j]){
                try{
                    otherImg[i-1].classList.remove('color-trans-effect-add');
                    otherImg[i-1].classList.add('color-trans-effect');   
                }
                catch(e){
                        
                }
            }
        }
    });
}