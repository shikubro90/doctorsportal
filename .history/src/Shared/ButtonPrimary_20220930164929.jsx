function ButtonPrimary({ children },props) {

  return (
    <div>
      <button className={`btn bg-gradient-to-r from-secondary to-primary border-none font-bold text-whi`}>
        {children}
      </button>
    </div>
  )
}

export default ButtonPrimary
