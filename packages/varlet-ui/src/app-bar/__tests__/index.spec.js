import example from '../example'
import AppBar from '..'
import VarAppBar from '../AppBar'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test app bar example', () => {
  const wrapper = mount(example)

  expect(wrapper.html()).toMatchSnapshot()
})

test('test app bar plugin', () => {
  const app = createApp({}).use(AppBar)
  expect(app.component(AppBar.name)).toBeTruthy()
})

test('test app bar props', () => {
  const wrapper = mount(VarAppBar, {
    props: {
      color: '#a3b9db',
      textColor: '#000',
      title: 'test title',
      titlePosition: 'center',
      elevation: false,
    },
    slots: {
      left: () => 'leftSlot',
      right: () => 'rightSlot',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})
