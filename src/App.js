import React from 'react';
import './App.css';
import Landingpage from './components/Landingpage/Laddingpage'
import DesignUpload from './components/DesignUpload/DesignUpload';
import DesignUpload1 from './components/DesignUpload/DesignUpload1';
import DesignUpload2 from './components/DesignUpload/DesignUpload2';
import PopUp from './components/PopUp/PopUp';
import WithWhom from './components/Withwhom/WithWhom';
import Sharing from './components/Sharing/Sharing';
import Connections from './components/Connections/Connections';
import Aboutyourself from './components/Aboutyourself/Aboutyourself';
import Storytime from './components/Storytime/Storytime';
import TermNconditions from './components/Connections/TermsNconditions/TermNconditions';

function App (){
    return (
      < div>
      <Landingpage/>
      <DesignUpload/>
      <DesignUpload1/>
       <DesignUpload2/>
       {/* <PopUp/> */}
      <WithWhom/>
      <Storytime/>
      <TermNconditions/>
      <Aboutyourself/>
      <Connections/>
      <Sharing/> 
      </div>
    );
}

export default App;
