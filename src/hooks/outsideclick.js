import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../store/modalSlice.jsx";

export default function useComponentVisible(initialIsVisible) {
  const modalState = useSelector((state) => state.modalController.open);
  const dispatch = useDispatch();

  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      dispatch(openModal(!modalState));
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible };
}
