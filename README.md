# Repository for my github pages app.
Built using Svelte

## How it works

The main functionality in github pages is that it serves your repository at an accessible url.

Visit the following [link](https://pages.github.com/) for more information.

## Repository manangement

Github pages serves your projects/repository as a normal webserver which means that you can just add an `index.html` in the root of your repository and github pages will build and deploy that automatically. One can then just add more static files and serve those as well.

If one wishes to deploy a project that uses a modern framework such as Svelte or React, then things get a little more complicated but not really.

## How to do it

Create your github pages repository like any other repository. Just name it exactly as your `username` and followed by `.github.io`

example:

    DanielHammerin@github.io

If you don't spell it exactly as your username, github pages won't identify it as a github pages repository.

After this, go to `Settings>Pages` and you should see your repository.

Select a source, which is a branch of the repository you want github pages to build from.

I recommend using the npm package called `gh-pages` which can be found [here](https://www.npmjs.com/package/gh-pages).

This package uses a simple script-like javascript file, placed in the root of your repository to deploy to a branch of your choosing on your repository.

Since you can specify which branch of the repository you want github pages to build and deploy, you can dedicate a branch to only hold the built resources such as `./public` or `./dist` or whatever your specific framework calls the directory, generated for the static files.

Perfect!

Thus, we create a new branch (I named mine `gh-pages`) that will only hold what my gh-pages script deploys and pushes to that branch.

### The script

    import { publish } from 'gh-pages';

    publish(
        './public', // path to public directory
        {
            branch: 'gh-pages',
            repo: 'https://github.com/DanielHammerin/DanielHammerin.github.io.git', // Update to point to your repository  
            user: {
                name: 'Daniel Hammerin', // update to use your name
                email: 'danne155@hotmail.com' // Update to use your email
            }
        },
        () => {
            console.log('Deploy Complete!')
        }
    )

Simply replace the values with your own and add an `npm script` in your `package.json` so you can easily deploy your changes.

    "scripts": {
        "gh-deploy": "node ./gh-pages.mjs",
        "build": "rollup -c",
        "dev": "rollup -c -w",
        "start": "sirv public --no-clear"
    }

## IMPORTANT

The branch you create on your repository to hold your built project will ONLY contain what is in your `./public` directory and as such you should never checkout or make changes in it since it will be overwritten on your next run of the deploy script.

Make all changes on other branches and merge them into `master` and then run the `deploy script` from `master`. You can of course run it from other branches too.
