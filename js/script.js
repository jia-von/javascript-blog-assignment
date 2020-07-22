/*JavaScript Objects Defined in Global*/
//Ulrich, 2020 JavaScript Method dated July 22, 2020 @link: https://github.com/TECHCareers-by-Manpower/4.1-javascript-objects

//Step 1: Create blueprint or constructor
//PascalCase for class
class BlogPost 
{
    constructor (title=[], content=[])
    {
        this.title = title;
        this.content = content;
    }
    //blogpost
    addTitlePost(title="")
    {
        if(title.length>0)
        {
            this.title.push(title);
        }
        else 
        {
            console.log("Sorry, empty title. Please try again.")
        }
    }
    outputTitle()
    {
        const titleList = document.createElement("h2");
        for(let i=0;i<this.title.length; i++)
        {
            const titleListOutput = documentElement("h2");
            titleListOutput.textContent = this.title[i];
            titleList.appendChild(titleListOutput);
        }
        document.body.appendChild(titleList);
    }

}
const blogOne = new BlogPost
blogOne.outputTitle();
