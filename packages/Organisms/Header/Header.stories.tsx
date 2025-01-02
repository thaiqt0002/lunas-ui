import { Meta, StoryObj } from '@storybook/react/*'
import Header from '.'
import { categoriesMock } from './mockdata'

const meta: Meta<typeof Header> = {
  title: 'Components/Organisms/Header',
  component: Header,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    categories: categoriesMock,
    onSignIn: () => console.log('Sign in'),
    onSignUp: () => console.log('Sign up'),
    onCategorySelected: (value) => console.log(value),
  },
}

export const WithUser: Story = {
  args: {
    user: {
      uuid: 'c3008463-fe16-48b6-a79f-8656bd5e54eb',
      role: 'USER',
      email: 'example@gmail.com',
      username: 'CustomAFK',
      fullname: 'Pham Minh Quang',
      avatar: '',
    },
    categories: categoriesMock,
    onSettingSelected: (value) => console.log(value),
    onCategorySelected: (value) => console.log(value),
  },
}
export const Loading: Story = {
  args: {
    categories: categoriesMock,
    isLoading: true,
    onCategorySelected: (value) => console.log(value),
  },
}
