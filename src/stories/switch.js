import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Switch from '../components/Switch';

storiesOf('My App/Switch', module)
  .add('unchecked', () => (<Switch id="unchecked" onChange={action('changed')} />))
  .add('checked', () => (<Switch id="checked" onChange={action('changed')} defaultChecked />))
  .add('disabled', () => (<Switch id="disabled" onChange={action('changed')} disabled />));
