const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                <img src="/images/sad-cat.jpg" alt="Sad Cat" />
                </div>
                Photo by <a href="https://unsplash.com/@spktwo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">George Bonev</a> on <a href="https://unsplash.com/photos/EcBBbfNpeYA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </main>
        </Def>
    )
}

module.exports = error404