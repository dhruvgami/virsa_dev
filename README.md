
Download the code

`npm install`

`npm run start` to start the local dev server


This repo has a working version of the react app with a sample festivals page added. To see the current progress, goto Festivals and see the content.


Link to deploy on netlify: https://musing-heyrovsky-3a20ca.netlify.com


Locally on mac, this is editable in ~/code/virsa_reactjs


DATOCMS_KEY is set in environment variable. The key is picked up when running locally or when deployed using "netlify deploy" command. It's also added to netlify UI under deploy settings, but from there the key is not picked up during automated deploy of git push. 


on mac, make sure to run "nvm use 12.12.0" to use netlify

`ntl dev` - run local server

`npm run build` - build locally

`netlify deploy` - make a pre-prod staged link for testing

`netlify deploy` --prod - deploy to prod version


Links to debug:
https://community.netlify.com/t/common-issue-frequently-encountered-problems-during-builds/213


Trying this: https://medium.com/better-programming/how-to-hide-your-api-keys-c2b952bc07e6

^ This worked!


next steps:
- fetch and parse data from datocms to pick specific data elements and show on frontend
- copy the render blocks from static version and create the cards
- figure out how to manage images, fetch and display

