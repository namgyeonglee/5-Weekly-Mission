// import styles from "./FolderButton.module.css";
import styled from 'styled-components';

function FolderButton({ key, id, value, active, onClick }) {
  // return (
  //   <button
  //     className={`${active ? 'styles.button' : 'styles.buttonSelected'}`}
  //     key={key}
  //     id={id}
  //     value={value}
  //     active={active}
  //     onClick={onClick}
  //   >
  //     {value}
  //   </button>      
  // );

  // if (active) 
  // const activeButton = () => {
    //   return (
      //     <button
      //       className={styles.buttonSelected}
      //       key={key}
      //       id={id}
  //       value={value}
  //       active={active}
  //       onClick={onClick}
  //     >
  //       {value}
  //     </button>
  //   );
  // }

  // if (active) return activeButton;
  
  // const style = `styles + .${active}`;

  const DefaultButton = styled.button`
    display: flex;
    padding: 8px 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid var(--Linkbrary-primary-color, #6D6AFE);
    background: var(--White);
    height: 35px;
    overflow: hidden;
  `;
  
  const ActiveButton = styled.button`
    color: var(--White);
    border: 1px solid var(--Linkbrary-primary-color, #6D6AFE);
    background: var(--Linkbrary-primary-color, #6D6AFE);
    display: flex;
    padding: 8px 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height: 35px;
    overflow: hidden;
  `;

  if (active) return (
    <ActiveButton
      key={key}
      id={id}
      value={value}
      active={active}
      onClick={onClick}
    >
      {value}
    </ActiveButton>      
  );

  return (
    <DefaultButton
      key={key}
      id={id}
      value={value}
      active={active}
      onClick={onClick}
    >
      {value}
    </DefaultButton>      
  );
  
}


export default FolderButton;
