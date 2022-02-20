function attachEvents() {

    let url=`https://rest-messanger.firebaseio.com/messanger.json`;
    console.log(url);

    let mess=document.getElementById('messages');


    let sendBtn=document.getElementById('submit');
    let refreshBtn=document.getElementById('refresh');


    refreshBtn.addEventListener('click',function () {

        fetch(url)
            .then(re=>re.json())
            .then(data=>{
                console.log(data);

                let result=Object.values(data).reduce((messages,message)=>
                    (messages+=`${message.author}:${message.content}\n`),''

                )

                mess.textContent=`${result}`;
            });
    });

         sendBtn.addEventListener('click',function () {

             let author=document.getElementById('author');
             let content=document.getElementById('content');


             fetch(url,{method:'POST',body:JSON.stringify({author:author.value,content:content.value})})

             author.value='';
             content.value='';
         });

}

attachEvents();