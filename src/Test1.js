import React from 'react';
import ftch from './axios';
import Test2 from './Test2';
function Test1(){
    return(
        <div>
            <h1>Test1</h1>
            
            <Test2 jsn={ftch} test='chck'></Test2>
        </div>
    );
}
export default Test1;