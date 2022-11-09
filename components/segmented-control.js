import { useState } from 'react'

export default function SegmentedControl({
  name,
  segments,
  callback,
  defaultIndex = 0,
  controlRef,
  ...props
}) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  const onInputChange = (value, index) => {
    setActiveIndex(index)
    callback(value, index)
  }

  return (
    <div ref={controlRef} {...props}>
      <div className="segments">
        {segments.map((item, i) => (
          <div
            key={item.value}
            className={`segment ${i === activeIndex ? 'active' : 'inactive'}`}
            ref={item.ref}
          >
            <input
              type="radio"
              value={item.value}
              id={item.label}
              name={name}
              onChange={() => onInputChange(item.value, i)}
              checked={i === activeIndex}
            />
            <label htmlFor={item.label}>{item.label}</label>
          </div>
        ))}
      </div>
    </div>
  )
}
