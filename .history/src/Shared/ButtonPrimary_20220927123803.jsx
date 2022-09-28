function ButtonPrimary({children}) {
  return (
    <div>
        <button className="btn bg-gradient-to-r from-secondary to-primary border-none">{children}</button>
    </div>
  )
}

export default ButtonPrimary