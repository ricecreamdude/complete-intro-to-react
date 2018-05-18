import React from 'react'
import { render } from 'react-dom'

const ce = React.createElement

const MyTitle = props => {
  return ce('div', 'my-title', ce('h1', { style: { color: props.color } }, props.title))
}

const MyFirstComponent = () => {
  return ce(
    'div',
    { id: 'my-first-component' },
    ce(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
    ce(MyTitle, { title: 'Rick and Morty', color: 'Navy' }),
    ce(MyTitle, { title: 'Raw', color: 'Pink' }),
    ce(MyTitle, { title: 'Westworld', color: 'Gray' }),
    ce(MyTitle, { title: 'The Office', color: 'peru' })
  )
}

render(ce(MyFirstComponent), document.getElementById('app'))
