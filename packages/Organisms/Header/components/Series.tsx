import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@/Atoms/NavigationMenu'

const Series = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="rounded-full font-bold text-ui-text-500">
        Series
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          Series
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

export default Series
