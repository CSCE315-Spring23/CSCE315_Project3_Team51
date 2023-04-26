# CSCE315_Project3_51
Team 51's All-inclusive Restaurant GUI for Rev's Grill 🐕‍🦺

## General Project Structure

This lists all files/folders that don't need to be edited by humans-- because they're automatically
configured by `npm` will not be included in this diagram)

```
📂-Repository // our repository
|
|--📁-Meeting Notes // folder with meeting notes
|
|--📂-RevGrillApp // entire web app
   |
   |--📂-api // back-end
   |   |
   |   |--📁-routes // express js files (explained later)
   |   |
   |   |--📃-.env // vars for database connecting (like db.Setup)
   |
   |--📂-client // front-end
       |
       |--📁-assets // all our images and stuff here
       |
       |--📂-src 
            |
            |--📁-pages // have the .js page for each page (will be grouped by category, ex. Customer_Side, etc)  
            |
            |--📃-App.js // main page (basically index.html)
            |
            |--📃-App.css // main .css file for everything

```

More to be written later (on how to get variables from the database to the react page :))

right now i haven't finished converting all the HTML files to be .js, but there is an example if you go to `client > src > pages > Customer_Side`, so if anyone wants to continue converting things, that would be very appreciated p___p
