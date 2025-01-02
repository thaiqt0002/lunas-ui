import { Meta, StoryObj } from '@storybook/react/*'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '.'

const meta: Meta = {
  title: 'Components/Atoms/Tabs',
  component: Tabs,
  tags: ['atoms', 'tabs'],
}
export default meta

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
}
