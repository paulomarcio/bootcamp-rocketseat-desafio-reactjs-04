import React, { Component } from 'react';

import './styles.css';

import PostItem from './item/index';

class Posts extends Component {
  state = {
    posts: [{
      image: 7,
      name: 'Júlio Alcântara',
      date: '04 Jun 2019',
      text: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
      comments: [{
        image: 2,
        name: 'Diego Fernandes',
        text: 'Estamos sim!!'
      }]
    }, {
        image: 3,
        name: 'Gabriel Lisboa',
        date: '04 Jun 2019',
        text: 'Fala Galera, beleza?',
        comments: [{
          image: 5,
          name: 'Clara Lisboa',
          text: 'Fala meu querido'
        }, {
          image: 4,
          name: 'Cezar Toledo',
          text: 'Diz aí!!'
        }]
    }]
  };

  render(){
    return (
      <section>
        {this.state.posts.map(post => <PostItem key={post.image} post={post} />)}
      </section>
    );
  }
}

export default Posts;