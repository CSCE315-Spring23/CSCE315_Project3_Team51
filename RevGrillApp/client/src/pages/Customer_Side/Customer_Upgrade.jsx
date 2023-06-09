import './style_menu.css';

export default function Customer_Upgrade() {

  return(
    <div className = 'upgrade'> 
      <div className = 'title'> Want to upgrade your order today? </div>
    
      <div className = 'grid'> 
        <div className = 'row'>
            <div className = 'column-wide'> 
              <div className = ' smaller-card'> 
                <div className = 'item-number'> #1</div>
                <img src="../Menu_Side/cat_burgers.png" alt="menu item" />
                <div className = 'text bold'> $7.49 </div>
                <div className = 'text'> Rev's Burger + side + drink </div>
                <button> Add to Order </button>
              </div>
            </div>
            <div className = 'column-wide'> 
              <div className = ' smaller-card'> 
                <div className = 'item-number'> #1</div>
                <img src="../Menu_Side/cat_burgers.png" alt="menu item" />
                <div className = 'text bold'> $7.49 </div>
                <div className = 'text'> Rev's Burger + side + drink </div>
                <button> Add to Order </button>
            </div>
          </div>
        </div>
      </div>
    
      <div className = "no-thanks"> 
        <button> No thanks! </button>
      </div>
        
    </div>
  
  )
  

}
