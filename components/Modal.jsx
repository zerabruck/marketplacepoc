'use client'
import { useCallback, useRef, useEffect, MouseEventHandler } from 'react'
import { useRouter } from 'next/navigation'

export default function Modal({ children, modalClassName, bodyClassName, onClose }) {
  const overlay = useRef(null)
  const wrapper = useRef(null)
  const router = useRouter()

  const onDismiss = useCallback(() => {
    if (onClose) {
      console.log('router.chat')
      router.push("/chat");
    } else {
      console.log('router.back()')
      router.back();
    }
  }, [router])

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss()
      }
    },
    [onDismiss, overlay, wrapper]
  )

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onDismiss()
    },
    [onDismiss]
  )

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  return (
    <div
      ref={overlay}
      className={"fixed z-[9999] left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 " + modalClassName}
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white " + bodyClassName}
      >
        {children && typeof children === 'function' ? children({ onDismiss, router }) : children}

        {/* {children} */}
      </div>
    </div>
  )
}
