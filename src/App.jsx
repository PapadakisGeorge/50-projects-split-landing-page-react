import React, {useState} from 'react';
import SplitPage from './SplitPage/SplitPage';
import './App.scss'

const App = () => {

  const [widths, setWidths] = useState({left: '50%', right: '50%'});
  
  
  return ( 
    <div className="container">
      <SplitPage 
        position='left'
        text='Sea'
        width={widths.left}
        onMouseEnter={() => setWidths({left: '70%', right: '30%'})}
        onMouseLeave={() => setWidths({left: '50%', right: '50%'})}
      />
      <SplitPage 
        position='right'
        text='Mountain'
        width={widths.right}
        onMouseEnter={() => setWidths({left: '30%', right: '70%'})}
        onMouseLeave={() => setWidths({left: '50%', right: '50%'})}
      />      
    </div>
    );
}

export default App;