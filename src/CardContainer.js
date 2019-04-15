import React from 'react';
import Card from './Card';

const CardContainer = (props) => {
    return props.posts.map(post => {
        return <Card 
                    key={post.id}
                    title={post.title}
                    isScrolling={props.isScrolling}
                    completed={post.completed}
                />
    })
}

export default CardContainer;