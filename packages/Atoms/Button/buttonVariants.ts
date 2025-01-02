import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'flex items-center justify-center gap-1 rounded-md transition duration-150 ease-in-out enabled:hover:opacity-80 enabled:active:opacity-100 enabled:active:ring-4 disabled:cursor-not-allowed disabled:opacity-40',
  {
    variants: {
      variant: {
        default: 'bg-ui-btn-primary !text-ui-text-50 enabled:focus:ring-ui-primary-200',
        secondary:
          'bg-ui-surface-50 !text-ui-primary-500 shadow-ui-overlay enabled:focus:ring-ui-primary-200',
        outline:
          'border border-solid border-ui-primary-400 !text-ui-primary-500 enabled:hover:shadow-ui-flat enabled:active:ring-ui-primary-200',
        destructive:
          'bg-ui-destructive-500 !text-ui-text-50 enabled:active:ring-ui-destructive-200',
        'destructive-secondary':
          'bg-ui-destructive-50 !text-ui-destructive-500 enabled:active:ring-ui-destructive-200',
        'destructive-outline':
          'border border-solid border-ui-destructive-400 bg-ui-destructive-50 !text-ui-destructive-500 ring-ui-destructive-200 disabled:opacity-60',
        'sort-outline': 'bg-ui-primary-50 !text-ui-primary-500 enabled:focus:ring-ui-primary-200',
        normal: 'border-ui-black border border-solid bg-ui-white enabled:active:shadow-ui-xl',
      },
      size: {
        default: 'px-3 py-1.5 text-ui-note font-semibold',
        base: 'px-3 py-1.5 text-ui-note font-semibold',
        large: 'px-4 py-2 text-ui-p font-semibold',
        small: 'px-2 py-1 text-ui-small-note font-semibold',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)
