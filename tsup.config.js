import { defineConfig } from 'tsup'

// eslint-disable-next-line import/no-unused-modules, import/no-anonymous-default-export
export default defineConfig({
  entryPoints: [
    './packages/tailwindTheme.ts',
    './packages/hooks/index.ts',
    './packages/Icons/index.ts',
    // ATOMS
    './packages/Atoms/Accordion/index.tsx',
    './packages/Atoms/AlertDialog/index.tsx',
    './packages/Atoms/AspectRatio/index.tsx',
    './packages/Atoms/Avatar/index.tsx',
    './packages/Atoms/Badge/index.tsx',
    './packages/Atoms/Breadcrumb/index.tsx',
    './packages/Atoms/Button/index.tsx',
    './packages/Atoms/Card/index.tsx',
    './packages/Atoms/Carousel/index.tsx',
    './packages/Atoms/Checkbox/index.tsx',
    './packages/Atoms/Command/index.tsx',
    './packages/Atoms/Dialog/index.tsx',
    './packages/Atoms/DropdownMenu/index.tsx',
    './packages/Atoms/Form/index.tsx',
    './packages/Atoms/Input/index.tsx',
    './packages/Atoms/Label/index.tsx',
    './packages/Atoms/MenuItem/index.tsx',
    './packages/Atoms/Money/index.tsx',
    './packages/Atoms/Navbar/index.tsx',
    './packages/Atoms/NavigationMenu/index.tsx',
    './packages/Atoms/NumberInput/index.tsx',
    './packages/Atoms/Popover/index.tsx',
    './packages/Atoms/Progress/index.tsx',
    './packages/Atoms/QuantityBtn/index.tsx',
    './packages/Atoms/RadioGroup/index.tsx',
    './packages/Atoms/ScrollBar/index.tsx',
    './packages/Atoms/Select/index.tsx',
    './packages/Atoms/Separator/index.tsx',
    './packages/Atoms/Sheet/index.tsx',
    './packages/Atoms/Skeleton/index.tsx',
    './packages/Atoms/Slider/index.tsx',
    './packages/Atoms/SmallQuantityBtn/index.tsx',
    './packages/Atoms/Switch/index.tsx',
    './packages/Atoms/Tabs/index.tsx',
    './packages/Atoms/Textarea/index.tsx',
    './packages/Atoms/Tooltip/index.tsx',
    './packages/Atoms/UserAvatar/index.tsx',
    './packages/Atoms/XButton/index.tsx',
    // MOLECULES
    './packages/Molecules/AuthenForm/index.tsx',
    './packages/Molecules/Search/index.tsx',
    './packages/Molecules/UserDropdown/index.tsx',
    // ORGANISMS
    './packages/Organisms/Footer/index.tsx',
    './packages/Organisms/Header/index.tsx',
    // LAYOUTS
    './packages/Layout/Flex/index.tsx',
    // AUTHENTICATION
    './packages/Authentication/SignIn/index.tsx',
    './packages/Authentication/SignUp/index.tsx',
    './packages/Authentication/ThankYou/index.tsx',
    //ECOMMERCE
    './packages/Ecommerce/Categories/index.tsx',
  ],
  target: 'es2021',
  format: ['esm'],
  clean: true,
  splitting: false,
  dts: true,
  external: [
    'react',
    'react-dom',
    '@hookform/error-message',
    '@hookform/resolvers',
    '@radix-ui/react-accordion',
    '@radix-ui/react-alert-dialog',
    '@radix-ui/react-aspect-ratio',
    '@radix-ui/react-avatar',
    '@radix-ui/react-checkbox',
    '@radix-ui/react-dialog',
    '@radix-ui/react-dropdown-menu',
    '@radix-ui/react-label',
    '@radix-ui/react-navigation-menu',
    '@radix-ui/react-popover',
    '@radix-ui/react-progress',
    '@radix-ui/react-radio-group',
    '@radix-ui/react-scroll-area',
    '@radix-ui/react-select',
    '@radix-ui/react-separator',
    '@radix-ui/react-slider',
    '@radix-ui/react-slot',
    '@radix-ui/react-switch',
    '@radix-ui/react-tabs',
    '@radix-ui/react-tooltip',
    '@radix-ui/react-visually-hidden',
    'class-variance-authority',
    'clsx',
    'cmdk',
    'embla-carousel-react',
    'framer-motion',
    'lucide-react',
    'react-hook-form',
    'react-spinners',
    'tailwind-merge',
    'zod',
  ],
})