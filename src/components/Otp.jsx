import { useRef, useState, useEffect } from "react"

export function Otp({ number = 6, setDisabled }) {
  const refs = useRef([])
  const [values, setValues] = useState(Array(number).fill(""))

  useEffect(() => {
    setDisabled(values.some(v => v === ""))
  }, [values, setDisabled])

  const handleChange = (val, i) => {
    if (!/^\d?$/.test(val)) return
    const next = [...values]
    next[i] = val
    setValues(next)
    if (val && i < number - 1) {
      refs.current[i + 1]?.focus()
    }
  }

  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace") {
      if (values[i]) {
        handleChange("", i)
      } else if (i > 0) {
        refs.current[i - 1]?.focus()
      }
    }
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex justify-center gap-2">
        {Array.from({ length: number }).map((_, i) => (
          <input
            key={i}
            ref={e => (refs.current[i] = e)}
            value={values[i]}
            onChange={e => handleChange(e.target.value.slice(-1), i)}
            onKeyDown={e => handleKeyDown(e, i)}
            maxLength={1}
            className="m-1 w-[80px] h-[120px] rounded-2xl bg-blue-500 outline-none px-8 text-white text-3xl text-center"
          />
        ))}
      </div>
    </div>
  )
}