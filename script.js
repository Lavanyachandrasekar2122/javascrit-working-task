// document.head.innerHTML='<title>Dom</title>';
// // document.body.innerHTML+='<p>Hello World...!!!!</p>';
// // document.body.innerHTML+="Hellowwww";
// let z =document.createElement('p');
// document.body.append(z)
// z.textContent='Welcome to DOM world';

//                                     //create parent
// let div=document.createElement('div')
// div.style.height='100px';
// div.style.width='200px';
// div.style.backgroundColor='yellow';
// div.style.borderRadius='30px';
// div.style.width='200px'
// div.style.padding='50px'
// document.body.append(div)

//                           //create child and append child into parent
// let para =document.createElement('p');
// para.textContent='This is Dom';
// para.style.color='black';
// para.style.fontSize= '25px';
// div.appendChild(para);
//                      //Adding and removeing a href link element
// let link=document.createElement('a');
// document.body.append(link)
// link.textContent='Home';
// //link(hover to Home)
// link.setAttribute('href','#');
// console.log(link.getAttribute('href'));
// //remove link(Hover)
// link.removeAttribute('href');
//                   //Remove the element
// link.href='#';
// link.remove();
//               //Adding Img
// let img=document.createElement('img')
// img.src='https://tse1.mm.bing.net/th?id=OIP.qsGpv_XIshw_AyzKTZOX6QHaEo&pid=Api&P=0&h=180';
// document.body.append(img)
// img.style.borderRadius='1000px';
// img.style.width='200px'
// img.style.padding='70px';

//                        //promt
// // let a=prompt('Enter the first value');
// // let b=prompt('Enter the second value');
// // document.write(parseInt(a)+parseInt(b));  //parseInt is used to convert string to integer

//                     //Accessing Element creating id 
// let input = document.createElement('p')
// input.id='username';
// document.body.append(input);
// let a = document.getElementById('username')
// a.textContent='Helloooowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww';
// document.body.append(a);
// a.style.fontFamily='Arial';
// a.style.color='blue';


         //queryselector is used to select the first h1 only
// let query = document.querySelector('h1');
// query.style.color='red';



// let all =document.querySelectorAll('p');
// console.log(all);

// //give color to collection
// for(let i=0;i<all.length;i++){
//     all[i].style.color='blue'
// }


                        //class
// Types of collection
// 1-Nodelist====static&nonstatic
// 2-HtmlCollection====dynamic&live


// let element = document.getElementsByClassName('heighlight');
// console.log(element);
// //giving background color
// for(let i=0; i<element.length;i++){
//     element[i].style.background='yellow';
// }
// console.log(element.length);
// console.log(element[0].innerText);
// console.log(element[2].innerText);
// console.log(element[3].innerText);

// let paranew=document.createElement('p')
// paranew.classname='heighlight';
// document.body.append(paranew);
// paranew.textContent='hellllloooooo';


                       // tag name
// let tag=document.getElementsByTagName('ol');
// console.log(tag[0].textContent);
// console.log(tag[0].innerText);



// for(let i=0;i<tag.length;i++){
//     tag[i].style.color='red';

// }












    
    
    

