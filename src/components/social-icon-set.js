import React from 'react';

const socials = [
    {
        name: 'github',
        icon:'https://faiyazbits-images.s3.us-east-2.amazonaws.com/github.jpeg',
        link:'https://github.com/faiyazbits'
    },
    {
        name: 'twitter',
        icon:'https://faiyazbits-images.s3.us-east-2.amazonaws.com/twitter.jpeg',
        link:'https://twitter.com/faiyazbits'
    },
    {
        name: 'skype',
        icon:'https://faiyazbits-images.s3.us-east-2.amazonaws.com/skype.png',
        link:'skype:faiyaz?chat"'
    },
    {
        name: 'gmail',
        icon:'https://faiyazbits-images.s3.us-east-2.amazonaws.com/gmail.png',
        link:'mailto:m.faiyazuddeen@gmail.com'
    },
]
function SocialIconSet(){
    return(
        <div className='flex flex-row justify-items-center items-start'>
            {socials.map((s) => (
                <a href={s.link}  className="outline-none mx-1">
                    <img src={s.icon} width="40" height="40" alt={s.name}/>
                </a>
            ))}
        </div>
    )
}

export default SocialIconSet;