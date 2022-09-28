function ButtonPrimary({children}) {
  return (
    <div>
        <button className="btn bg-gradient-to-r from-primary to-sec">{children}</button>
    </div>
  )
}

export default ButtonPrimary