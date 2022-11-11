import { createPortal } from 'react-dom'

export default function Modal({ children, isOpen, setIsOpen }) {
  if (typeof window === 'object')
    return createPortal(
      <>
        {isOpen && (
          <div className="fixed inset-0 grid place-items-center z-50">
            <div
              className="fixed inset-0 bg-black-65"
              onClick={() => setIsOpen(false)}
            />
            <div className="relative">{children}</div>
          </div>
        )}
      </>,
      document.querySelector('#__next')
    )
}
