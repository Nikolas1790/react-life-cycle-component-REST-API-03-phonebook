import styled from 'styled-components'

export const FormTable = styled.form`

display: flex;
  flex-direction: column;
     
border: 1.5px solid rgb(171, 163, 163);
width: 400px;
padding: 8px;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`

export const ButtonAddContact = styled.button`
font-weight: 700;
border-radius: 4px;
margin-bottom: 8px;
padding: 8px;
width: 140px;
cursor: pointer;
background:  rgb(87, 87, 253);
color:white;

border: 1.5px solid rgb(171, 163, 163);
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

    transition: box-shadow 250ms linear, background 250ms linear; 

    &:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
    background:  blue;
    
  }
`


export const Label = styled.label`
 display: block;
  margin-bottom: 12px;
  font-size: 20px;  
`
export const InputInfToAdd = styled.input` 
  width: 380px;
  
  padding: 8px;
  border-radius: 4px;
  border: 1.5px solid rgb(171, 163, 163); 
  
`

export const ItemsContracts = styled.ul`
list-style: none;

display: flex;
flex-direction: column;

gap: 8px;
`

export const ItemContact = styled.li`
display: flex;
justify-content: space-between;
padding: 8px;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
    max-width: 600px;

`
export const ButtonDel = styled.button`
font-weight: 700;
border-radius: 4px;

cursor: pointer;

border: 1.5px solid rgb(171, 163, 163);
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
transition: box-shadow 250ms linear;
    &:hover {
        
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
    
  }
`
export const FindContact = styled.p`
margin: 4px;
font-weight: 500;
`