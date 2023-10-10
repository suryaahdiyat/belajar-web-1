const idF = document.querySelector('#features')
        const features = document.querySelectorAll(".feature")
        const hero = document.querySelector(".hero")
        const hleft = document.querySelector(".hero-text-left")
        const hright = document.querySelector(".hero-text-right img")
        console.log(hleft.children.length)
        for (let i=0;i<hleft.children.length;i++){
            console.log(hleft.children[i])
        }

        window.onscroll= () => {
            const top = window.scrollY
            const offset_1 = hero.offsetTop - 400
            const height_1 = hero.offsetHeight
            const offset_2 = idF.offsetTop - 400
            const height_2 = idF.offsetHeight

            if(top >= offset_1 && top < offset_1 + height_1){
                // hleft
                // hleft.forEach(f => f.classList.add('animate'))
                for (let i=0;i<hleft.children.length;i++){
                    hleft.children[i].classList.add('animate')
                // console.log(hleft.children[i])
                }
                hright.classList.add('animate')
            }
            if(top >= offset_2 && top < offset_2 + height_2){
                features.forEach(f => f.classList.add('animate'))
            }
        }