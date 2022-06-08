//get all list elements as nodelist and convert them to the array list
const lis = Array.from(document.getElementsByClassName("contact-item cf"));
//display the first page that only can see the 10 people's information
//reference(display): https://www.w3schools.com/jsref/prop_style_display.asp
for(var i = 10; i < lis.length; i++){
    lis[i].style.display = 'none';
}
//creating links and making event handler
createPaginationLinks();

function createPaginationLinks(){

    //Separate the links by 10 people's information
    const lengthOfContacts = lis.length;
    //console.log(lengthOfContacts); //54
    const numOfContacts = 10;

    const pageOfNum = Math.floor(lengthOfContacts/numOfContacts);
    //console.log(pageOfNum); //5

    //making pageNumber 
    let strHtml = "";
    for(var i = 0; i <= pageOfNum; i++){
        strHtml += `<li><a id='${i+1}' onclick = 'showPages(id)'>${i+1}</a></li>`;
        //console.log(i+1);
    }

    //adding list links into HTML file
    const links = document.getElementById("links");
    links.innerHTML = strHtml;
}

//showing the pages according to the page number
function showPages(pageNum){

    //get the start number and ending number according to the page number
    const startNum = ((pageNum-1) * 10);
    const lastNum = (pageNum * 10);

    //get specific people's information list
    const contactSpc = lis.slice(startNum, lastNum);
    //console.log(contactSpc);

    //hiding other all li elements
    hideElements(lis);
    //showing 10 specific people's information list
    showElements(contactSpc);
}

//showing specific people's information list
function showElements(lisContacts){

   const lis =  lisContacts;
   for(var i = 0; i < lis.length; i++){
    lis[i].style.display = 'list-item';
    }
}

//hiding specific people's information list
function hideElements(lisContacts){

     const lis = lisContacts;
    for(var i = 0; i < lis.length; i++){
        lis[i].style.display = 'none';
    }
}

