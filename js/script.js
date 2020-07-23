//JSON - JavaScript Object Notation
//Create a class named article
//string in arrays declared in global

//global output for title

class Article  
    {//Start of class
        constructor (
            title=[
            "First Day of Class (C#)",
            "How to Build Websites! (HTML)",
            "Brand new Topic (CSS)",
            "Another New Topic!?(JS)",
            "Adding on to our JS (TS)",
            "Time to Reach"
            ], 
            content=[
            "Oh C# is a programming language, often used for Windows programs... this could be really useful! It has variables, loops, and even methods; a lot to learn, but it really opens up doors!",
            "What a great day! We learned all about HRML, or, Hyper Text Markup Language. It is the content and skeleton of the website",
            "Today we learned about CSS, or, Cascading Style Sheets - how cool! This language helps us make our sites look pretty, we get to define the styles",
            "Wow! I thought the other languages were pretty neat, but this one takes the cake so far, JS, or JavaScript, can be used to bring our websites to LIFE! It is used for functionality within the webpage",
            "Whoe knew we could use something to check our code for errors and offer additional featues to JavaScript?! TS, or TypeScript, is a superset of JavaScript that compiles to regular JS. The extra features will come in handy!",
            "Our very first large JavaScript framework, how exciting! Now we can build web components and build more complext front-ends with ease... a bit of learning curve but so useful now that we are getting the hang of it"
            ])
            {
            this.title = title;
            this.content = content;      
            }
        
        outputTitle() //start of outputTitle
            {
            for (const titleValue of this.title)
                {
                const titleListItem = document.createElement("article"); //create a <artile element> element
                titleListItem.textContent = titleValue;
                document.body.appendChild(titleListItem); //Append the titleListItem to <aritcle> node
                
                let contentIndex = 0;
                const contentListItem = document.createElement("p"); //create p element
                contentListItem.textContent = this.content[contentIndex];
                titleListItem.appendChild(contentListItem);
                contentIndex = ++contentIndex;
                }
            }//end of outputTitle
        
        /*outputContent () //start of outputContent
            {    
                const contentListItem = document.createElement("p"); //create p element
                const contentIndex = 0;
                contentListItem.textContent = this.content[contentIndex]; //push out content underneath p, my reiterate similarly to the titleListItem
                document.body.appendChild(contentListItem);
                //titleListItem.appendChild(contentListItem); //append the content to the titlelistitem @link: Parent Node was referenced : https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append                
            }//end of outputContent*/
 
    }//end of class

    const blogPostOne = new Article;
    blogPostOne.outputTitle();

   
    





