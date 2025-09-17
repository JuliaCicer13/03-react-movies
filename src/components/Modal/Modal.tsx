import { createPortal } from "react-dom";
import css from "../Modal/Modal.module.css"
import React, { useEffect, type KeyboardEvent } from "react";


interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({onClose, children}: ModalProps) {
   const handleBackDropeClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
         onClose();
      }
   }
   useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
         if (e.key === "Escape") {
            onClose();
         }
      }
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";

      return () => {
         document.removeEventListener("keydown", handleKeyDown);
      };

   }, [onClose])
 return createPortal(
    <div className={css.backdrop}
         onClick={handleBackDropeClick}
         role="dialog"
         aria-modal="true"
     >
      <div className={css.modal}>
         <button 
             className={css.closeButton}
             onClick={onClose}
             aria-label="Close modal">&times;</button>
             {children}
              <h2>Modal text</h2>
         <p>This is some content inside the modal.</p>
      </div>
    </div>,
    document.body
 );
}