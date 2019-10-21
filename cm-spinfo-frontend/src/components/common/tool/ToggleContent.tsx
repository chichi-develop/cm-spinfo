import React, { useState } from 'react';

type Props = {
  toggle: Function;
  content: Function;
};

export const ToggleContent: React.FC<Props> = ({ toggle, content }) => {
  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <>
      {toggle(show)}
      {isShown && content(hide)}
    </>
  );
};

// Usage
//
// <ToggleContent
//   toggle={show => <button onClick={show}>SHOW</button>}
//   content={hide => (
//     <Modal>
//       <button onClick={hide}><CloseIcon/></button>
//       <Content/>
//     </Modal>
//   )}
// />
