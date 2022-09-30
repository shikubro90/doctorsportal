function ButtonPrimary({ children },props) {
  const {font} =props
  return (
    <div>
      <button className={`btn bg-gradient-to-r from-secondary to-primary border-none font-bold ${font}`}>
        {children}
      </button>
    </div>
  )
}

export default ButtonPrimary
