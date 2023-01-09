import { useRef } from "react";

export default function useDebounce(fn, delay) {
    const timeoutRef = useRef(null);

    function debounceFn(...params) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => {fn(...params)}, delay);
        fn(...params);

    };
    return debounceFn;
};