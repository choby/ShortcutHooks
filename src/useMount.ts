import { useEffect } from "react";

const useMount = (func: () => (void | (() => void))) => useEffect(() => func(), []);

export default useMount;