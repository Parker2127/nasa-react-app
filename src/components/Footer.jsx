
export default function Footer( props ) {

  const {showModal, handleToggleModal} = props  /* Desocnstructing the props received */

  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
          <h2>Martian Landscape </h2>
          <h1>APOD PROJECT</h1>
      </div>

      <button onClick = {handleToggleModal}>
        <i class="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  )
}
