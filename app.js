const blocks = document.getElementsByClassName('item')

const animimg = document.getElementById('animal');
const fruteimg = document.getElementById('frute');
const decoreimg = document.getElementById('decore');
const natureimg = document.getElementById('nature');

const imganimal = ['a_1.webp','a_2.jpg','a_3.jpg','a_4.jpg','a_5.webp']
const imgfruit = ['f_1.webp','f_2.jpg','f_3.jpg','f_4.jpg','f_5.jpg']
const imgnature = ['n_1.jpg','n_2.jpg','n_3.jpg','n_4.jpg','n_5.jpg']
const imgdecoration = ['d_1.jpg','d_2.jpg','d_3.jpg','d_4.jpg','d_5.jpg']

const show = document.getElementById('show')
const slides = document.getElementById('slides')
const main = document.getElementById('main')

    let counter1 = 1;
    let counter2 = 1;
    let counter3 = 1;
    let counter4 = 1;
    let albumimg = [];
    let myvar

    const hoverFun = (alt) => {
        switch (alt){
            case 'animal':
                if (counter1 >= imganimal.length){
                    counter1=0
                }
                animimg.src = `./pcs/${imganimal[counter1]}`
                ++counter1
            break
            case 'decoration':
                if (counter2 >= imgdecoration.length){
                    counter2=0
                }
                decoreimg.src = `./pcs/${imgdecoration[counter2]}`
                ++counter2
            break
            case 'fruit':
                if (counter3 >= imgfruit.length){
                    counter3=0
                }
                fruteimg.src = `./pcs/${imgfruit[counter3]}`
                ++counter3
            break
            case 'nature':
                if (counter4 >= imgnature.length){
                    counter4=0
                }
                natureimg.src = `./pcs/${imgnature[counter4]}`
                ++counter4
            break
        }
    }
    

for(let i of blocks){
    const imgs = i.firstChild
    imgs.addEventListener('mouseover', (event) => {
        const alt = event.target.alt
        
           myvar =  setInterval(() => {
                hoverFun(alt)
            }, 1000);
            
    })

    imgs.addEventListener('mouseleave' , () => {
        clearInterval(myvar)
    })

    i.addEventListener('click' , (event) => {
        switch (event.target.id){
            case 'animal':
                slides.innerHTML = null
                main.innerHTML = null
                for(let i in imganimal){
                    let newchild = document.createElement('img')
                    newchild.src = `./pcs/${imganimal[i]}`
                    slides.appendChild(newchild)
                    newchild.addEventListener('click' , (event) => {
                        let fullpath =  event.target.src;
                        let addres = fullpath.indexOf('pcs');
                        let newaddress = fullpath.slice(addres);
                        main.innerHTML = `<img src="./${newaddress}" alt="">`
                    })
                }
            break
            case 'decore':
                slides.innerHTML = null
                main.innerHTML = null
                for(let i in imgdecoration){
                    let newchild = document.createElement('img')
                    newchild.src = `./pcs/${imgdecoration[i]}`
                    slides.appendChild(newchild)
                    newchild.addEventListener('click' , (event) => {
                        let fullpath =  event.target.src;
                        let addres = fullpath.indexOf('pcs');
                        let newaddress = fullpath.slice(addres);
                        main.innerHTML = `<img src="./${newaddress}" alt="">`
                    })
                }
            break
            case 'frute':
                slides.innerHTML = null
                main.innerHTML = null
                for(let i in imgfruit){
                    let newchild = document.createElement('img')
                    newchild.src = `./pcs/${imgfruit[i]}`
                    slides.appendChild(newchild)
                    newchild.addEventListener('click' , (event) => {
                        let fullpath =  event.target.src;
                        let addres = fullpath.indexOf('pcs');
                        let newaddress = fullpath.slice(addres);
                        main.innerHTML = `<img src="./${newaddress}" alt="">`
                    })
                }
            break
            case 'nature':
                slides.innerHTML = null
                main.innerHTML = null
                for(let i in imgnature){
                    let newchild = document.createElement('img')
                    newchild.src = `./pcs/${imgnature[i]}`
                    slides.appendChild(newchild)
                    newchild.addEventListener('click' , (event) => {
                        let fullpath =  event.target.src;
                        let addres = fullpath.indexOf('pcs');
                        let newaddress = fullpath.slice(addres);
                        main.innerHTML = `<img src="./${newaddress}" alt="">`
                    })
                }
            break
        }
        show.classList.add('displaygrid')

    })
}