import ghpages from 'gh-pages';

ghpages.publish(
    'public', // path to public directory
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