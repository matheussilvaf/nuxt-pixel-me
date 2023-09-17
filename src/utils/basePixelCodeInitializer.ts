declare global {
  interface Window {
    fbq?: any
    _fbq?: any
  }
}

export const basePixelCodeInitializer = (
  f: Window,
  b: Document,
  e: string,
  v: string,
  n?: any,
  t?: any,
  s?: any
) => {
  if (typeof window !== 'undefined') {
    if (f.fbq) return

    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }

    if (!f._fbq) f._fbq = n

    n.push = n
    n.loaded = !0
    n.version = '2.0'
    n.queue = []
    t = b.createElement(e)
    t.async = !0
    t.src = v
    s = b.getElementsByTagName(e)[0]
    s.parentNode.insertBefore(t, s)
  }
}
