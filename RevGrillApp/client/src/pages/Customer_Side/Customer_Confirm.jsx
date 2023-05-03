import './style_menu.css';

export function Customer_Confirm() {

  return(
    <div>
    <div className = 'small-window'>
    <div className='text bold'> Are you sure you're ready to submit? </div>
    <div className='text'> Once submitted, changes can no longer be made to orders. </div>
  
    <button> Yes, I'm sure </button>
    <div className='no-thanks'> <button> Return to Order </button> </div>
  
    </div>
  
  </div>
  
  )

}
