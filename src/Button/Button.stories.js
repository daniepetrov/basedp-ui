import { storiesOf } from '@storybook/react'
import React from 'react'
import styled, { css } from 'styled-components'
import { darken } from 'polished'
import trash from './../IconButton/trash.inline.svg'
import { Button, Icon, Flex } from './../index'

const toggle = true

const buttonActive = css`
  color: white;
  background-color: ${'orange'};
  border-color: ${'orange'};

  &:hover,
  &:focus {
    border-color: ${darken(0.2, 'orange')};
    background-color: ${darken(0.2, 'orange')};
  }

  &:active {
    border-color: ${darken(0.3, 'orange')};
    background-color: ${darken(0.3, 'orange')};
  }
`

storiesOf('Components/Button', module)
  .add('default', () => <Button>Delete</Button>)
  .add('with variant (prime)', () => <Button variant="prime">Delete</Button>)
  .add('with variant (outlined)', () => <Button variant="outlinedPrime">Delete</Button>)
  .add('with variant (text)', () => <Button variant="textPrime">Delete</Button>)

  .add('with variant (prime) + overridecss', () => (
    <Button variant="prime" css={toggle && buttonActive}>
      Delete
    </Button>
  ))
  .add('with children icon', () => (
    <Button variant="prime" textStyle="caps">
      <Icon src={trash} mr="8px" />
      Delete
    </Button>
  ))
