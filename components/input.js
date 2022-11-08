import clsx from 'clsx'

export function InputGroup({ children, className, ...props }) {
  return (
    <div className={clsx('input-group', className)} {...props}>
      {children}
    </div>
  )
}

export function Input({ hasIcon, className, ...props }) {
  return (
    <input
      type="text"
      className={clsx('input', hasIcon && 'has-icon', className)}
      {...props}
    />
  )
}

export function InputLabel({ children, className, ...props }) {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx('input-label', className)}
      {...props}
    >
      {children}
    </label>
  )
}
