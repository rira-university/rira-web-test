import {
  Children,
  cloneElement,
  forwardRef,
  MutableRefObject,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
} from 'react'

const defaultThreshold = 0.2
const options = {
  root: null,
  rootMargin: '0px',
  threshold: defaultThreshold,
}

function intersectionCallback(entries: any[], observer: IntersectionObserver) {
  entries.forEach((entry) => {
    const target = entry.target
    if (entry.isIntersecting) {
      target.classList.add('animate')
    } else {
      target.classList.remove('animate')
    }
  })
}

type Props = PropsWithChildren<ReactNode> & {
  threshold?: number
}

const observers: {[threshold in number | string]: IntersectionObserver} = {}

export default function Animator({
  children,
  threshold = defaultThreshold,
}: Props) {
  const AnimationTarget = forwardRef((props, ref) =>
    cloneElement(Children.only(children) as ReactElement, {
      ...props,
      ref,
    }),
  )
  AnimationTarget.displayName = 'AnimationTarget'

  const target = useRef() as MutableRefObject<Element>

  useEffect(() => {
    observers[threshold] =
      observers[threshold] ||
      new IntersectionObserver(intersectionCallback, {...options, threshold})

    const targetDom = target.current
    observers[threshold].observe(targetDom)

    return () => {
      observers[threshold].unobserve(targetDom)
    }
  })

  return <AnimationTarget ref={target} />
}
