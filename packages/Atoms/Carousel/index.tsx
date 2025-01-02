'use client'

import {
  ComponentProps,
  createContext,
  forwardRef,
  HTMLAttributes,
  KeyboardEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import Button from '../Button'

import { cn } from '@/libs'
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

// eslint-disable-next-line react/display-name, unicorn/no-null
const CarouselContext = createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

const Carousel = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & CarouselProps>(
  ({ orientation = 'horizontal', opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins,
    )
    const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false)
    const [canScrollNext, setCanScrollNext] = useState<boolean>(false)

    const onSelect = useCallback((api: CarouselApi) => {
      if (!api) return

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = useCallback(() => api?.scrollPrev(), [api])

    const scrollNext = useCallback(() => api?.scrollNext(), [api])

    const handleKeyDown = useCallback(
      ({ key, preventDefault }: KeyboardEvent<HTMLDivElement>) => {
        if (key === 'ArrowLeft') {
          scrollPrev()
        } else if (key === 'ArrowRight') {
          scrollNext()
        }
        preventDefault()
      },
      [scrollPrev, scrollNext],
    )

    useEffect(() => {
      if (!api || !setApi) return

      setApi(api)
    }, [api, setApi])

    useEffect(() => {
      if (!api) return

      onSelect(api)
      api.on('reInit', onSelect)
      api.on('select', onSelect)

      api?.off('select', onSelect)
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn('relative', className)}
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  },
)
Carousel.displayName = 'Carousel'

const CarouselContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel()

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn(
            'flex',
            orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
            className,
          )}
          {...props}
        />
      </div>
    )
  },
)
CarouselContent.displayName = 'CarouselContent'

const CarouselItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel()

    return (
      <div
        ref={ref}
        aria-roledescription="slide"
        className={cn(
          'min-w-0 shrink-0 grow-0 basis-full',
          orientation === 'horizontal' ? 'pl-4' : 'pt-4',
          className,
        )}
        {...props}
      />
    )
  },
)
CarouselItem.displayName = 'CarouselItem'

const CarouselPrevious = forwardRef<HTMLButtonElement, ComponentProps<typeof Button>>(
  ({ className, variant = 'outline', children, ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel()

    return (
      <Button
        ref={ref}
        variant={variant}
        className={cn(
          'absolute size-8 rounded-full',
          orientation === 'horizontal'
            ? '-left-12 top-1/2 -translate-y-1/2'
            : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        {children ?? (
          <>
            <ArrowLeft className="size-4" />
            <span className="sr-only">Previous slide</span>
          </>
        )}
      </Button>
    )
  },
)
CarouselPrevious.displayName = 'CarouselPrevious'

const CarouselNext = forwardRef<HTMLButtonElement, ComponentProps<typeof Button>>(
  ({ className, variant = 'outline', children, ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel()

    return (
      <Button
        ref={ref}
        variant={variant}
        className={cn(
          'absolute size-8 rounded-full',
          orientation === 'horizontal'
            ? '-right-12 top-1/2 -translate-y-1/2'
            : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        {children ?? (
          <>
            <ArrowRight className="size-4" />
            <span className="sr-only">Next slide</span>
          </>
        )}
      </Button>
    )
  },
)
CarouselNext.displayName = 'CarouselNext'

export { Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious }
