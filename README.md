# 🦋My Affirmations 🦋

[![](https://img.shields.io/endpoint?url=https%3A%2F%2Faka.ms%2Fvso-badge)](https://online.visualstudio.com/environments/new?name=My%20Affirmations&repo=jlooper/my-affirmations)

**This app is hosted on Azure Static Web Apps**:

To launch this app on ASWA, fork this repo to your own GitHub account and either login to the [Azure Portal](https://aka.ms/trystaticwebapps) or use this button to deploy your code to the portal:

[![Deploy to Azure button](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/?feature.customportal=false&WT.mc_id=affirmations-github-jelooper#create/Microsoft.StaticApp)

Alternately, fork this repo and run it using the [Vue CLI](https://cli.vuejs.org/), then deploy it to Static Apps via the [VS Code extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps?WT.mc_id=affirmations-github-jelooper).

You can run the Azure function that is contained in the `/api` folder of this web-app folder using the [Azure Extensions](https://code.visualstudio.com/docs/azure/extensions?WT.mc_id=affirmations-github-jelooper) from within VS Code. Before running your function on port 7071, make sure to cd to the api folder and `npm install` dependencies.

> You can read more about how to build and host Azure Static Sites on the Microsoft [Docs](https://docs.microsoft.com/azure/static-web-apps/overview?WT.mc_id=affirmations-github-jelooper). You can also walk through how to publish your static sites to Azure on Microsoft [Learn](https://docs.microsoft.com/en-us/learn/modules/publish-app-service-static-web-app-api?WT.mc_id=green-github-jelooper)

## Affirmations for daily consumption!

The affirmations on this site were created originally by [@annthurium](https://github.com/annthurium/affirmations/blob/master/affirmations.js).

This app includes an API built using Azure functions (/api folder), and a web app using Vue.js (/app folder),.

To run the functions, use the Azure extension for Visual Studio Code. To run the web app, cd to /app and run `npm run serve`, ensuring you have the Vue CLI installed.

## Try it out

https://jolly-coast-0f8c0541e.azurestaticapps.net/
