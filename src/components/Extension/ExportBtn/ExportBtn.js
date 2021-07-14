import React from 'react';
import { Button } from '@tableau/tableau-ui';

function ExportBtn(props) {
  return (
      <div>
        {props.showButton &&
         <Button kind={props.style} style={{cursor: "pointer"}} disabled={props.disabled} onClick={props.export}>{props.label}</Button>}
         {!props.showButton && <div onClick={props.export} style={{width: "100%", height: "100vh", padding: "none", backgroundColor: "transparent", cursor: "pointer", overflow: "hidden" }}></div>}
      </div>
  );
}

export default ExportBtn;
