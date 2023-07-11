const parentContainer = document.querySelector('.cont_facts');

parentContainer.addEventListener('click', event=>{

            const current = event.target;

            const isReadMoreBtn = current.className.includes('read_more_btn');

            if(!isReadMoreBtn) return;

            const currentText = event.target.parentNode.querySelector('.read_more_text');

            currentText.classList.toggle('read_more_text--show');

            current.textcontent = current.textcontent.includes('Read More') ? "Read Less..." : "Read more...";
        })
