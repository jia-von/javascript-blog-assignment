//JSON - JavaScript Object Notation
//Create a class named article
//string in arrays declared in global
const title = 
    [
        "First Day of CLass (C#)",
        "How to Build Websies! (HTML)",
        "Brand new Topic (CSS)",
        "Another New Topic!?(JS)",
        "Adding on to our JS (TS)",
        "Time to Reach"
    ];

const content = 
    [
        "Oh C# is a programming language, often used for Windows programs... this could be really useful! It has variables, loops, and even methods; a lot to learn, but it really opens up doors!",
        "What a great day! We learned all about HRML, or, Hyper Text Markup Language. It is the content and skeleton of the website",
        "Today we learned about CSS, or, Cascading Style Sheets - how cool! This language helps us make our sites look pretty, we get to define the styles",
        "Wow! I thought the other languages were pretty neat, but this one takes the cake so far, JS, or JavaScript, can be used to bring our websites to LIFE! It is used for functionality within the webpage",
        "Whoe knew we could use something to check our code for errors and offer additional featues to JavaScript?! TS, or TypeScript, is a superset of JavaScript that compiles to regular JS. The extra features will come in handy!",
        "Our very first large JavaScript framework, how exciting! Now we can build web components and build more complext front-ends with ease... a bit of learning curve but so useful now that we are getting the hang of it"
   
    ];
//global output for title


class Article  
    {//Start of class
        constructor (title=[], content=[])
        {
            this.title = title;
            this.content = content;      
        }
        outputTitle() 
            {
            const titleList = document.createElement("article");
            for (let index = 0; index<title.length; index++)
            {
            const titleListItem = document.createElement("h2");
            titleListItem.textContent = title[index];
            titleList.appendChild(titleListItem);
            }
        document.body.appendChild(titleList);
        }
        outputContent() 
            {
            const contentList = document.createElement("p");
            for (let index = 0; content<title.length; index++)
            {
            const contentListItem = document.createElement("p");
            contentListItem.textContent = title[index];
            contentList.appendChild(contentListItem);
            }
        document.h2.appendChild(contentList);
        }
       
    }//end of class

    const blogTitle = new Article;
        blogTitle.outputTitle();
        blogTitle.outputContent();
    





