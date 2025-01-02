import { Meta, StoryObj } from '@storybook/react/*'
import CategoriesPage from '.'
import { BrandMock } from './mockdata'

const meta: Meta<typeof CategoriesPage> = {
  title: 'Ecommerce/Categories',
  component: CategoriesPage,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    brandData: BrandMock,
    onFilterConfirm(data) {
      console.log(data)
    },
    onLayoutChange(layout) {
      console.log(layout)
    },
  },
}
